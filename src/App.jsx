const App = () => {
  const clients = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
  ];

  const services = [
    {
      title: "Web Copywriter",
      desc: "Freelance web copyrighting include adverts, websites, digital media or posts.",
    },

    {
      title: "Brochure Copywriter",
      desc: "Freelance web copyrighting include adverts, websites, digital media or posts.",
    },

    {
      title: "Digital Copywriting",
      desc: "Freelance web copyrighting include adverts, websites, digital media or posts.",
    },

    {
      title: "Email Copywriting",
      desc: "Freelance web copyrighting include adverts, websites, digital media or posts.",
    },

    {
      title: "Blog Content Writer",
      desc: "Freelance web copyrighting include adverts, websites, digital media or posts.",
    },

    {
      title: "Press Release Writer",
      desc: "Freelance web copyrighting include adverts, websites, digital media or posts.",
    },

    {
      title: "Video Script writer",
      desc: "Freelance web copyrighting include adverts, websites, digital media or posts.",
    },

    {
      title: "Content Marketing",
      desc: "Freelance web copyrighting include adverts, websites, digital media or posts.",
    },
  ];

  const experiences = [
    {
      src: 17,
      title: "Web Copywriter",
      date: "2022 - 24",
      brand: "Google",
      desc: "I must explain to you how all this mistaken idea of denouncing pleasure and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
    },
    {
      src: 5,
      title: "Digital Copywriter",
      date: "2017 - 2018",
      brand: "Accenture",
      desc: "I must explain to you how all this mistaken idea of denouncing pleasure and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
    },
    {
      src: 16,
      title: "Blog Content Writer",
      date: "2019 - 2021",
      brand: "Toyota",
      desc: "I must explain to you how all this mistaken idea of denouncing pleasure and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
    },
    {
      src: 7,
      title: "Brochure Copywriter",
      date: "2014 - 2016",
      brand: "PHILIPS",
      desc: "I must explain to you how all this mistaken idea of denouncing pleasure and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
    },
  ];

  const portfolioes = [
    {
      title: "Document Manager Application",
      category: "Web Development",
    },
    {
      title: "Digital Marketing",
      category: "Web Development",
    },
    {
      title: "Creative Portfolio",
      category: "Web Development",
    },
    {
      title: "Mobile App Development",
      category: "Web Development",
    },
  ];

  const testimonials = [
    {
      title: "Great Advice",
      rating: 5,
      desc: "The standard chunk of lorem Ipsum used since the some music reprodused below for those interested.",
      clientName: "Mel Gibson",
      role: "Clients",
    },
    {
      title: "Design Quality",
      rating: 4,
      desc: "The standard chunk of lorem Ipsum used since the some music reprodused below for those interested.",
      clientName: "Tom Hanks",
      role: "Jackson S.",
    },
    {
      title: "Great Solution",
      rating: 4,
      desc: "The standard chunk of lorem Ipsum used since the some music reprodused below for those interested.",
      clientName: "Johnny Depp",
      role: "CEO",
    },
  ];

  return (
    <div>
      <header>
        <div className="flex items-center flex-col md:flex-row justify-between px-16 py-6 bg-white shadow-xl border-2 md:fixed w-full top-0 left-0 z-10">
          <img src="/images/logo.png" alt="logo" className="w-28" />
          <nav className="flex gap-6 font-semibold capitalize text-lg flex-col md:flex-row">
            <a href="#" className="block">
              home
            </a>
            <a href="#" className="block">
              about
            </a>
            <a href="#" className="block">
              services
            </a>
            <a href="#" className="block">
              portfolio
            </a>
            <a href="#" className="block">
              blog
            </a>
            <a href="#" className="block">
              contact
            </a>
          </nav>
          <button className="bg-[#5777FF] hover:bg-black duration-300 text-white py-4 px-8 capitalize rounded-full space-x-2">
            <span className="font-semibold ">Let`s talk</span>
            <i className="ri-arrow-right-up-line text-xl"></i>
          </button>
        </div>

        <div className="bg-[url('/images/main-Bg.png')]">
          <div className="w-8/12 mx-auto grid grid-cols-5  py-32">
            <div className="flex-grow col-span-3 space-y-8">
              <button className="flex items-center gap-2 bg-[#ECEFFF] px-6 py-2 rounded-full">
                <img src="/images/bg-2.svg" alt="bg-2" className="w-5" />
                <span className="text-[#5777FF] font-semibold">
                  Welcome to my portfolio
                </span>
              </button>

              <h1 className="font-bold capitalize">
                <span className="text-7xl ">I'm William Isaac </span>
                <br />
                <span className="text-6xl text-[#5777FF]">
                  freelance copywriter
                </span>
              </h1>

              <h2 className="w-8/12 text-lg text-gray-500">
                Since 1999, we are working for business, agency or individuals
                for building digital content based in New York, USA.
              </h2>
              <div className="flex items-end gap-12">
                <button className="bg-black text-white px-12 py-4 shadow-xl flex gap-2 items-center text-xl justify-center animate-pulse">
                  <span className="uppercase font-bold">Hire me</span>
                  <i className="ri-instance-line block animate-spin"></i>
                </button>
                <img src="/images/arow.png" className="w-28" alt="arrow" />
              </div>
            </div>
            <div className="col-span-2 relative">
              <img src="/images/pic.jpg" alt="pic" className="rounded-full " />
              <div className="bg-[#5777FF] w-[180px] h-[180px] rounded-full absolute bottom-0 left-[15px] shadow-lg flex flex-col items-center justify-evenly text-white">
                <h1 className="text-5xl font-bold">30+</h1>
                <p className="font-bold text-center w-8/12">
                  Years of Experience
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src="/images/arrow-down.png"
              alt="arrow-down"
              className="animate-bounce"
            />
          </div>
        </div>
      </header>

      <section>
        <div className="bg-[#F2F4FF] py-24">
          <div className="w-8/12 mx-auto">
            <div className="flex items-center justify-center gap-4">
              <img
                src="/images/arrow-right.png"
                alt="arrow-right"
                className="w-6"
              />
              <h3 className="text-[#5777FF] text-lg font-semibold">Clients</h3>
            </div>

            <h1 className="text-center text-5xl font-bold mt-8">
              Clients I've worked with
            </h1>

            <div className="grid grid-cols-6 gap-x-20 gap-y-16 flex items-center mt-20">
              {clients.map((client, clientIndex) => (
                <img
                  src={`/images/clients/${client}.png`}
                  alt={client}
                  key={clientIndex}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="bg-[#F9FAFF] py-24">
          <div className="w-8/12 mx-auto">
            <div className="flex items-center justify-center gap-4">
              <img
                src="/images/arrow-right.png"
                alt="arrow-right"
                className="w-6"
              />
              <h3 className="text-[#5777FF] text-lg font-semibold">
                MY SERVICES
              </h3>
            </div>

            <h1 className="text-center text-5xl font-bold mt-8">What I Do</h1>

            <div className="grid grid-cols-4 gap-8 mt-20">
              {services.map((service, serviceIndex) => (
                <div
                  key={serviceIndex}
                  className="bg-white border border-white px-4 py-12 space-y-6 hover:border-[#5777FF] duration-300 hover:shadow-xl rounded"
                >
                  <div>
                    <img
                      src={`/images/services/${serviceIndex + 1}.jpg`}
                      alt={serviceIndex}
                    />
                  </div>
                  <a
                    href="#"
                    className="text-xl font-bold block  hover:text-[#5777FF] duration-300"
                  >
                    {service.title}
                  </a>

                  <p className="text-lg text-gray-400 pr-4">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-[#F2F4FF] py-24">
          <div className="w-6/12 mx-auto">
            <div className="flex items-center justify-center gap-4">
              <h3 className="text-[#5777FF] text-lg font-semibold">^RESUME^</h3>
            </div>

            <h1 className="text-center text-5xl font-bold mt-8">
              My Work Experience
            </h1>

            <div className="grid gap-8 mt-20">
              {experiences.map((experience, experiencesIndex) => (
                <div key={experiencesIndex} className="border border-[#C8D3FF]">
                  <div className="bg-white flex items-center justify-between p-8">
                    <div className="flex items-center gap-4">
                      <span className="block w-7 h-7 flex items-center justify-center rounded-full border border-gray-400 border-dashed animate-spin">
                        <i className="ri-circle-fill text-[#5777FF] text-[7px]"></i>
                      </span>
                      <h1 className="text-2xl font-semibold">
                        {experience.title}
                      </h1>
                    </div>
                    <div>
                      <h3 className="text-xl text-gray-500">
                        {experience.date}
                      </h3>
                    </div>
                  </div>

                  <div className="bg-[#F9FAFF] px-12 py-12 flex gap-8 items-center">
                    <div>
                      <img
                        src={`/images/clients/${experience.src}.png`}
                        alt={experiencesIndex}
                      />
                    </div>
                    <div>
                      <h1 className="text-xl font-semibold">
                        {experience.brand}
                      </h1>
                      <p className="text-lg text-gray-500">{experience.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-[#F2F4FF] py-24">
          <div className="w-8/12 mx-auto">
            <div className="flex items-center justify-center gap-4">
              <h3 className="text-[#5777FF] text-lg font-semibold">
                ^PORTFOLIO^
              </h3>
            </div>

            <h1 className="text-center text-5xl font-bold mt-8">
              Selected Work
            </h1>

            <div className="grid md:grid-cols-2 gap-8 mt-20">
              {portfolioes.map((portfolio, portfolioIndex) => (
                <div key={portfolioIndex}>
                  <img
                    src={`/images/portfolio/${portfolioIndex + 1}.jpg`}
                    alt={portfolioIndex}
                    className="rounded-xl shadow-xl cursor-pointer hover:blur-sm duration-500 mb-8"
                  />

                  <a
                    href="#"
                    className="text-2xl font-bold block hover:text-[#5777FF] duration-300"
                  >
                    {portfolio.title}
                  </a>
                  <a href="#" className="text-gray-400 text-lg">
                    {portfolio.category}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-[#F9FAFF] py-24">
          <div className="w-8/12 mx-auto bg-[url('/images/web-bg.png')] bg-bottom bg-cover pt-8 pb-16">
            <div className="flex items-center justify-center gap-4">
              <img
                src="/images/arrow-right.png"
                alt="arrow-right"
                className="w-6"
              />
              <h3 className="text-[#5777FF] text-lg font-semibold">
                TESTIMONIALS
              </h3>
            </div>

            <h1 className="text-center text-5xl font-bold mt-8">
              What My Clients Say
            </h1>

            <div className="grid md:grid-cols-3 gap-8 mt-20">
              {testimonials.map((testimonial, testimonialIndex) => (
                <div
                  key={testimonialIndex}
                  className="bg-white rounded-lg px-8 py-8 space-y-6 hover:border-[#5777FF] duration-300 hover:shadow-xl  border border-white"
                >
                  <div className="flex items-center gap-4">
                    <h1 className="text-2xl font-bold">{testimonial.title}</h1>
                    <div>
                      {Array(testimonial.rating)
                        .fill()
                        .map((rat, ratIndex) => (
                          <i
                            key={ratIndex}
                            className="ri-star-fill text-amber-400 text-lg"
                          ></i>
                        ))}
                    </div>
                  </div>

                  <p className="text-lg text-gray-400">{testimonial.desc}</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <h1 className="text-xl font-bold">
                        {testimonial.clientName}
                      </h1>
                      <p className="text-gray-400">{testimonial.role}</p>
                    </div>
                    <img
                      src="/images/quote-dev.png"
                      alt="quote"
                      className="w-10"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-[url('/images/main-bg-2.png')] py-24">
          <div className="w-8/12 mx-auto grid md:grid-cols-3 gap-20">
            <div className="flex items-center">
              <img src="/images/pic-2.jpg" alt="pic" className="rounded-full" />
            </div>
            <div className="col-span-2 space-y-8">
              <img
                src="/images/moving-hand.png"
                alt="moving-hand"
                className="animate-bounce"
              />
              <h1 className="text-5xl font-bold">Who I Am</h1>
              <p className="text-xl text-gray-500">
                I'm William Isaac, a Freelance English Creative Copywriter,
                Content Writer and Communications Consultant based in New York,
                USA. By better copying, I create value for the companies. I have
                spent more than 25 + years at various copywriting agencies,
                advertising, public relations and digital agencies, and most
                recently as a freelance copywriter for brands and businesses,
                honing my creative writing skills.
              </p>
              <button className="bg-black text-white px-12 py-4 shadow-xl flex gap-2 items-center text-xl justify-center animate-pulse">
                <span className="uppercase font-bold">Hire me</span>
                <i className="ri-instance-line block animate-spin"></i>
              </button>
            </div>
          </div>
        </div>

        <div className="bg-[#F9FAFF] py-24">
          <div className="w-8/12 mx-auto grid md:grid-cols-2 gap-20">
            <div>
              <div className="flex items-center gap-4">
                <img
                  src="/images/arrow-right.png"
                  alt="arrow-right"
                  className="w-6"
                />
                <h3 className="text-[#5777FF] text-lg font-semibold">
                  STAY CONNECTED
                </h3>
              </div>
              <h1 className="text-5xl font-bold">Let`s Work Together!</h1>
              <div className="py-16 space-y-8">
                <div className="flex items-center gap-4">
                  <button className="bg-[#5777FF] w-14 h-14 rounded-full flex items-center justify-center text-white text-xl">
                    <i class="ri-phone-line"></i>
                  </button>
                  <div>
                    <p className="text-lg text-gray-500">Phone</p>
                    <a
                      href="tel:+12346691234"
                      className="text-xl text-gray-700 hover:text-[#5777FF] duration-300 font-bold"
                    >
                      +123-4669-1234
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <button className="bg-[#5777FF] w-14 h-14 rounded-full flex items-center justify-center text-white text-xl">
                    <i class="ri-mail-forbid-line"></i>
                  </button>
                  <div>
                    <p className="text-lg text-gray-500">Email</p>
                    <a
                      href="mailto:hello@flixta.com"
                      className="text-xl text-gray-700 hover:text-[#5777FF] duration-300 font-bold"
                    >
                      hello@flixta.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <button className="bg-[#5777FF] w-14 h-14 rounded-full flex items-center justify-center text-white text-xl">
                    <i class="ri-map-pin-line"></i>
                  </button>
                  <div>
                    <p className="text-lg text-gray-500">Address</p>
                    <h1 className="text-xl text-gray-700 font-bold">
                      2096 New Market, New Road
                      <br /> North Carolina, USA
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-white shadow-xl p-8 py-16 rounded-lg">
                <form className="grid grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="fullname"
                    placeholder="Full Name"
                    className="border outline-none p-6 bg-[#F9FAFF] rounded text-gray-400 placeholder:text-gray-300"
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    className="border outline-none p-6 bg-[#F9FAFF] rounded text-gray-400 placeholder:text-gray-300"
                  />

                  <input
                    type="number"
                    name="mobile"
                    placeholder="Your Phone"
                    className="border outline-none p-6 bg-[#F9FAFF] rounded text-gray-400 placeholder:text-gray-300"
                  />

                  <select
                    placeholder="Choose Service"
                    className="border outline-none p-6 bg-[#F9FAFF] rounded text-gray-400 placeholder:text-gray-300"
                  >
                    <option value="web development">Choose Services</option>
                    <option value="web development">Web Development</option>
                    <option value="digital marketing">Digital Marketing</option>
                    <option value="brand strategy">Brand Strategy</option>
                  </select>

                  <textarea
                    className="border outline-none p-6 bg-[#F9FAFF] rounded text-gray-400 placeholder:text-gray-300 col-span-2"
                    placeholder="Write Your Message"
                    rows="5"
                  ></textarea>

                  <div>
                    <button className="bg-[#5777FF] hover:bg-black duration-300 text-white px-8 py-4 rounded-full">
                      SEND MESSAGE
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="bg-[#F2F4FF] py-16">
          <div className="w-8/12 mx-auto space-y-8">
            <div className="flex justify-center">
              <img src="/images/logo.png" alt="logo" className="w-28" />
            </div>
            <nav className="flex gap-8 justify-center text-lg ">
              <a
                href="#"
                className="block text-gray-500 hover:text-[#5777FF] duration-300"
              >
                Home
              </a>
              <a
                href="#"
                className="block text-gray-500 hover:text-[#5777FF] duration-300"
              >
                About
              </a>
              <a
                href="#"
                className="block text-gray-500 hover:text-[#5777FF] duration-300"
              >
                Services
              </a>
              <a
                href="#"
                className="block text-gray-500 hover:text-[#5777FF] duration-300"
              >
                Portfolio
              </a>
              <a
                href="#"
                className="block text-gray-500 hover:text-[#5777FF] duration-300"
              >
                Blog
              </a>
              <a
                href="#"
                className="block text-gray-500 hover:text-[#5777FF] duration-300"
              >
                Contact
              </a>
            </nav>
            <p className="text-center text-lg text-gray-500">
              <span>© 2024 Flixta. Designed by RSTheme with</span>
              <i className="ri-heart-3-fill text-red-500"></i>.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default App;

// #5777FF
// href="mailto:hello@flixta.com"
