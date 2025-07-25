import React, { useState, useEffect, useRef } from "react";

const properties = [
	{
		image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
		title: "Apartamento Luxuoso",
		description: "Vista para o mar, 3 suítes, 2 vagas de garagem.",
	},
	{
		image: "https://images.unsplash.com/photo-1460518451285-97b6aa326961?auto=format&fit=crop&w=1200&q=80",
		title: "Casa Moderna",
		description: "Espaço gourmet, piscina e jardim privativo.",
	},
	{
		image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80",
		title: "Cobertura Exclusiva",
		description: "Cobertura duplex com área de lazer completa.",
	},
];

const Carousel = () => {
	const [current, setCurrent] = useState(0);
	const [offset, setOffset] = useState(0);
	//const [isTransitioning, setIsTransitioning] = useState(false);
	const startX = useRef<number | null>(null);
	const isDragging = useRef(false);

	// Troca automática a cada 4 segundos (loop infinito visual)
	useEffect(() => {
		const interval = setInterval(() => {
			//setIsTransitioning(true);
			setOffset(-window.innerWidth);
			setTimeout(() => {
				if (current === properties.length - 1) {
					//setIsTransitioning(false);
					setOffset(0);
					setCurrent(0);
				} else {
					setCurrent((prev) => prev + 1);
					setOffset(0);
					//setIsTransitioning(false);
				}
			}, 300);
		}, 4000);
		return () => clearInterval(interval);
	}, [current]);

	const handleChangeSlide = (direction: number) => {
		//setIsTransitioning(true);
		setTimeout(() => {
			setCurrent((prev) => {
				if (direction > 0) {
					return prev === properties.length - 1 ? 0 : prev + 1;
				} else {
					return prev === 0 ? properties.length - 1 : prev - 1;
				}
			});
			setOffset(0);
			//setIsTransitioning(false);
		}, 300);
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
			className="w-full relative h-[40vh] md:h-[60vh] lg:h-[80vh] select-none overflow-hidden"
			onTouchStart={handleTouchStart}
			onTouchMove={handleTouchMove}
			onTouchEnd={handleTouchEnd}
			onMouseDown={handleMouseDown}
			onMouseMove={handleMouseMove}
			onMouseUp={handleMouseUp}
			onMouseLeave={handleMouseLeave}
			style={{ cursor: isDragging.current ? "grabbing" : "grab" }}
		>
			<div
				className="w-full h-full flex"
				style={{
					transform: `translateX(calc(${-current * 100}% + ${offset}px))`,
					transition: isDragging.current
						? "none"
						: "transform 0.3s cubic-bezier(.4,0,.2,1)",
				}}
			>
				{properties.map((property, idx) => (
                	<img
                        key={idx}
                        src={property.image}
                        alt={property.title}
                        className="w-full h-[40vh] md:h-[60vh] lg:h-[80vh] object-cover flex-shrink-0"
                        draggable={false}
                    />
                ))}
			</div>
			<div className="absolute inset-0 flex flex-col justify-end p-8 pointer-events-none">
				<h2 className="text-3xl md:text-5xl font-extrabold text-white mb-2 drop-shadow-lg">
					{properties[current].title}
				</h2>
				<p className="text-lg md:text-2xl text-pink-100 mb-6 drop-shadow">
					{properties[current].description}
				</p>
				<div className="pointer-events-auto">
					<button
						className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-6 rounded-full shadow-lg transition"
						onClick={() => alert(`Saiba mais sobre: ${properties[current].title}`)}
					>
						Saiba mais
					</button>
				</div>
			</div>
			<div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
				{properties.map((_, idx) => (
					<span
						key={idx}
						className={`w-3 h-3 rounded-full ${
							idx === current
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