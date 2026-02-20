
import laptop from '../assets/laptop.jpg';


export default function Who_we_are() {
  return (
    <section className="relative gap-8 items-center px-10 py-10"
    style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), 
        url(${laptop})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center'}}
    >
        <div className='flex flex-col justify-center items-center h-full mb-10'>
            <h2 className="text-4xl font-bold text-white mb-4">Who We Are</h2>
            <h2 className="text-5xl font-extrabold text-white mb-6">Your trusted partner in Software</h2>
            <p className="text-lg text-white">We at tech chronicles have AI solutions tailored to your need. We craft innovative digital solutions from web and mobile apps to AI and blockchain systems. With over a decade of experience, we transform ideas into powerful, scalable products that drive growth and innovation for businesses worldwide.</p>   
        </div>  
    </section>
  );
}
