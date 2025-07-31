import React, { useState, useEffect, useRef } from "react";

const properties = [
	{
		image: "/imoveis/img1.jpg",
		title: "Apartamento Luxuoso 1",
		description: "Vista panorâmica, acabamento premium e lazer completo.",
	},
	{
		image: "/imoveis/img2.jpg",
		title: "Apartamento Luxuoso 2",
		description: "Design moderno, varanda gourmet e localização privilegiada.",
	},
	{
		image: "/imoveis/img3.jpg",
		title: "Apartamento Luxuoso 3",
		description: "Espaço amplo, vista para a cidade e segurança 24h.",
	},
	{
		image: "/imoveis/img4.jpg",
		title: "Apartamento Luxuoso 4",
		description: "Ambientes integrados, iluminação natural e área de lazer.",
	},
	{
		image: "/imoveis/img5.jpg",
		title: "Apartamento Luxuoso 5",
		description: "Piscina privativa, suíte master e vista para o mar.",
	},
];

const Carousel = () => {
	const [current, setCurrent] = useState(1); // Começa no primeiro slide real (índice 1)
	const [offset, setOffset] = useState(0);
	const startX = useRef<number | null>(null);
	const isDragging = useRef(false);
	const [transition, setTransition] = useState(true);

	// Slides para loop infinito: [último, ...original, primeiro]
	const slides = [
		properties[properties.length - 1],
		...properties,
		properties[0],
	];

	// Troca automática a cada 4 segundos (loop infinito visual)
	useEffect(() => {
		const interval = setInterval(() => {
			handleChangeSlide(1);
		}, 4000);
		return () => clearInterval(interval);
		// eslint-disable-next-line
	}, [current]);

	// Corrige o loop infinito após a transição
	useEffect(() => {
		if (!transition) return;
		if (current === slides.length - 1) {
			setTimeout(() => {
				setTransition(false);
				setCurrent(1);
			}, 300);
		}
		if (current === 0) {
			setTimeout(() => {
				setTransition(false);
				setCurrent(slides.length - 2);
			}, 300);
		}
	}, [current, slides.length, transition]);

	useEffect(() => {
		if (!transition) {
			setTimeout(() => setTransition(true), 20);
		}
	}, [transition]);

	const handleChangeSlide = (direction: number) => {
		setCurrent((prev) => prev + direction);
		setOffset(0);
	};

	// Touch events
	const handleTouchStart = (e: React.TouchEvent) => {
		startX.current = e.touches[0].clientX;
		isDragging.current = true;
	};

	const handleTouchMove = (e: React.TouchEvent) => {
		if (!isDragging.current || startX.current === null) return;
		const diff = e.touches[0].clientX - startX.current;
		setOffset(diff);
	};

	const handleTouchEnd = () => {
		if (Math.abs(offset) > 80) {
			handleChangeSlide(offset > 0 ? -1 : 1);
		} else {
			setOffset(0);
		}
		isDragging.current = false;
		startX.current = null;
	};

	// Mouse events
	const handleMouseDown = (e: React.MouseEvent) => {
		startX.current = e.clientX;
		isDragging.current = true;
	};

	const handleMouseMove = (e: React.MouseEvent) => {
		if (!isDragging.current || startX.current === null) return;
		const diff = e.clientX - startX.current;
		setOffset(diff);
	};

	const handleMouseUp = () => {
		if (Math.abs(offset) > 80) {
			handleChangeSlide(offset > 0 ? -1 : 1);
		} else {
			setOffset(0);
		}
		isDragging.current = false;
		startX.current = null;
	};

	const handleMouseLeave = () => {
		if (isDragging.current) {
			handleMouseUp();
		}
	};

	return (
		<div
			className="w-full relative h-screen select-none overflow-hidden"
			onTouchStart={handleTouchStart}
			onTouchMove={handleTouchMove}
			onTouchEnd={handleTouchEnd}
			onMouseDown={handleMouseDown}
			onMouseMove={handleMouseMove}
			onMouseUp={handleMouseUp}
			onMouseLeave={handleMouseLeave}
		>
			<div
				className="w-full h-full flex"
				style={{
					transform: `translateX(calc(${-current * 100}% + ${offset}px))`,
					transition:
						transition && !isDragging.current
							? "transform 0.3s cubic-bezier(.4,0,.2,1)"
							: "none",
				}}
			>
				{slides.map((property, idx) => (
					<div key={idx} className="w-full h-screen relative flex-shrink-0">
						<img
							src={property.image}
							alt={property.title}
							className="w-full h-full object-cover"
							draggable={false}
						/>
						{/* Overlay levemente escuro */}
						<div className="absolute inset-0 bg-black" style={{ opacity: 0.35 }}></div>
					</div>
				))}
			</div>
			{/* Texto centralizado */}
			<div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 pointer-events-none">
				<h2 className="text-3xl md:text-5xl font-extrabold text-white mb-2 drop-shadow-lg">
					{
						properties[
							(current - 1 + properties.length) % properties.length
						].title
					}
				</h2>
				<p className="text-lg md:text-2xl text-pink-100 mb-6 drop-shadow">
					{
						properties[
							(current - 1 + properties.length) % properties.length
						].description
					}
				</p>
			</div>
			<div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
				{properties.map((_, idx) => (
					<span
						key={idx}
						className={`w-3 h-3 rounded-full ${
							idx === (current - 1 + properties.length) % properties.length
								? "bg-pink-400"
								: "bg-white/60"
						} border border-white mx-1 transition`}
					/>
				))}
			</div>
		</div>
	);
};

export default Carousel;