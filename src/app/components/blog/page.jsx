import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Blog = () => {
  const articles = [
    {
      title: "Digital Conference Of IT Tech Events...",
      description: "Digital Conference Of IT Tech Events in 2020 Home – Single Post Deka August 20, 2022 0 Comment Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi elit arcu, posuere ac ipsum...",
      image: "/bg-1.jpg",
      link: "#"
    },
    {
      title: "Data Security With Multiple Business Values.",
      description: "Data Security With Multiple Business Values. Home – Single Post Deka August 20, 2022 0 Comment Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi elit arcu, posuere ac ipsum...",
      image: "/bg-2.jpg",
      link: "#"
    },
    {
      title: "Providing Top Quality Cleaning & Related...",
      description: "Providing Top Quality Cleaning & Related Services Charms. Home – Single Post Deka August 20, 2022 0 Comment Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi elit arcu, posuere...",
      image: "/bg-3.jpeg",
      link: "#"
    }
  ];

  return (
    <div className="bg-black text-white py-12" id='blog'>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">Latest <span className="text-teal-500">News & Articles</span></h2>
        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div key={index} className="bg-[#0D1B1B] border border-white p-6 shadow-lg hover:scale-105 transition-transform duration-300">
              <div className="overflow-hidden rounded-t-lg">
                <Image 
                  src={article.image} 
                  alt={article.title} 
                  width={400} 
                  height={225} 
                  className="transform hover:scale-110 transition-transform duration-300 filter hover:grayscale" 
                />
              </div>
              <h3 className="text-xl font-bold mt-4">{article.title}</h3>
              <p className="mt-2">{article.description}</p>
              <a href={article.link} className="text-teal-500 mt-4 inline-flex items-center">
                Learn more
                <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;
