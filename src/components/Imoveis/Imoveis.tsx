import { useState } from "react";

const categories = [
  {
    name: "Condomínios",
    properties: [
      {
        image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=600&q=80",
        title: "Condomínio Luxo",
        description: "Apartamento em condomínio fechado, lazer completo.",
      },
      {
        image: "https://images.unsplash.com/photo-1460518451285-97b6aa326961?auto=format&fit=crop&w=600&q=80",
        title: "Condomínio Moderno",
        description: "Segurança 24h, área verde e piscina.",
      },
      {
        image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
        title: "Condomínio Clube",
        description: "Piscina, quadra, salão de festas.",
      },
      {
        image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
        title: "Condomínio Familiar",
        description: "Ambiente seguro e tranquilo para famílias.",
      },
      {
        image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=600&q=80",
        title: "Condomínio Premium",
        description: "Localização privilegiada e infraestrutura completa.",
      },
    ],
  },
  {
    name: "Residências",
    properties: [
      {
        image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=600&q=80",
        title: "Casa Moderna",
        description: "Espaço gourmet, piscina, jardim privativo.",
      },
      {
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
        title: "Casa Familiar",
        description: "3 suítes, varanda, quintal amplo.",
      },
      {
        image: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=600&q=80",
        title: "Casa de Campo",
        description: "Natureza, espaço amplo, lazer e tranquilidade.",
      },
      {
        image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
        title: "Casa Urbana",
        description: "Próxima ao centro, com garagem.",
      },
      {
        image: "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?auto=format&fit=crop&w=600&q=80",
        title: "Casa Compacta",
        description: "Ideal para jovens, perto do metrô.",
      },
    ],
  },
  {
    name: "Comerciais",
    properties: [
      {
        image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
        title: "Sala Comercial",
        description: "Centro empresarial, pronta para uso.",
      },
      {
        image: "https://images.unsplash.com/photo-1454023492550-5696f8ff10e1?auto=format&fit=crop&w=600&q=80",
        title: "Loja de Rua",
        description: "Excelente localização, vitrine ampla.",
      },
      {
        image: "https://images.unsplash.com/photo-1460518451285-97b6aa326961?auto=format&fit=crop&w=600&q=80",
        title: "Andar Corporativo",
        description: "Ideal para empresas de médio porte.",
      },
      {
        image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
        title: "Coworking",
        description: "Espaço compartilhado, moderno e flexível.",
      },
      {
        image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=600&q=80",
        title: "Galpão",
        description: "Amplo espaço para logística e armazenamento.",
      },
    ],
  },
  {
    name: "Praia",
    properties: [
      {
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
        title: "Casa na Praia",
        description: "Vista para o mar, pé na areia.",
      },
      {
        image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=600&q=80",
        title: "Apartamento Beira-Mar",
        description: "Varanda gourmet, condomínio com piscina.",
      },
      {
        image: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=600&q=80",
        title: "Cobertura na Praia",
        description: "Cobertura duplex com vista panorâmica.",
      },
      {
        image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=600&q=80",
        title: "Chalé à Beira-Mar",
        description: "Aconchegante, ideal para finais de semana.",
      },
      {
        image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
        title: "Casa de Veraneio",
        description: "Espaço amplo para lazer e descanso.",
      },
    ],
  },
  {
    name: "Cidade",
    properties: [
      {
        image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
        title: "Apartamento Central",
        description: "Próximo a tudo, vista urbana.",
      },
      {
        image: "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?auto=format&fit=crop&w=600&q=80",
        title: "Studio Moderno",
        description: "Ideal para jovens, perto do metrô.",
      },
      {
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
        title: "Apartamento Compacto",
        description: "Funcionalidade e praticidade no centro.",
      },
      {
        image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=600&q=80",
        title: "Cobertura Urbana",
        description: "Luxo e conforto com vista privilegiada.",
      },
      {
        image: "https://images.unsplash.com/photo-1460518451285-97b6aa326961?auto=format&fit=crop&w=600&q=80",
        title: "Apartamento Familiar",
        description: "Espaço para toda a família, perto de escolas.",
      },
    ],
  },
  {
    name: "Campo",
    properties: [
      {
        image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=600&q=80",
        title: "Chácara",
        description: "Natureza, espaço amplo, lazer e tranquilidade.",
      },
      {
        image: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=600&q=80",
        title: "Sítio",
        description: "Ideal para descanso e eventos familiares.",
      },
      {
        image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
        title: "Fazenda",
        description: "Produção rural e lazer em um só lugar.",
      },
      {
        image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=600&q=80",
        title: "Casa Rural",
        description: "Tranquilidade e contato com a natureza.",
      },
      {
        image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=600&q=80",
        title: "Rancho",
        description: "Ideal para finais de semana e festas.",
      },
    ],
  },
  {
    name: "Montanha",
    properties: [
      {
        image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80",
        title: "Casa na Montanha",
        description: "Vista panorâmica, clima ameno.",
      },
      {
        image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=600&q=80",
        title: "Chalé",
        description: "Aconchegante, lareira, contato com a natureza.",
      },
      {
        image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
        title: "Refúgio Serrano",
        description: "Privacidade e sossego nas alturas.",
      },
      {
        image: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=600&q=80",
        title: "Cabana",
        description: "Rústica, perfeita para o inverno.",
      },
      {
        image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=600&q=80",
        title: "Casa de Pedra",
        description: "Charme e tradição em meio à serra.",
      },
    ],
  },
];

const categoryIcons: Record<string, string> = {
  "Condomínios": "🏢",
  "Residências": "🏠",
  "Comerciais": "🏬",
  "Praia": "🏖️",
  "Cidade": "🌆",
  "Campo": "🌳",
  "Montanha": "⛰️",
};

const Imoveis = () => {
  const [selected, setSelected] = useState(categories[0].name);

  const selectedCategory = categories.find(cat => cat.name === selected);

  return (
    <section className="w-full bg-gray-50 py-16 px-2 sm:px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-pink-900 mb-10 text-center">
          Imóveis
        </h2>
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setSelected(cat.name)}
              className={`flex items-center space-x-2 rounded-full shadow px-4 py-2 font-semibold transition text-base md:text-lg
                ${selected === cat.name
                  ? "bg-pink-500 text-white"
                  : "bg-white text-pink-700 hover:bg-pink-50"}
              `}
              aria-current={selected === cat.name}
            >
              <span className="text-xl">{categoryIcons[cat.name]}</span>
              <span>{cat.name}</span>
            </button>
          ))}
        </div>
        {selectedCategory && (
          <div id={selectedCategory.name.toLowerCase()} className="mb-16">
            <h3 className="text-2xl font-bold text-blue-900 mb-6 flex items-center gap-2">
              <span className="text-3xl">{categoryIcons[selectedCategory.name]}</span>
              {selectedCategory.name}
            </h3>
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
              {selectedCategory.properties.map((property, pidx) => (
                <div
                  key={pidx}
                  className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col hover:scale-105 transition-transform"
                >
                  <img
                    src={property.image}
                    alt={property.title}
                    className="h-48 w-full object-cover"
                  />
                  <div className="p-4 flex-1 flex flex-col">
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">
                      {property.title}
                    </h4>
                    <p className="text-gray-600 mb-4 flex-1">{property.description}</p>
                    <a
                      href="#contact"
                      className="mt-auto inline-block bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-6 rounded-full shadow transition"
                    >
                      Saiba mais
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Imoveis;