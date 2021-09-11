import React from "react"
import Layout from "../components/layout"
import HeaderLayout from "../components/HeaderLayout"
import SEO from "../components/Seo"

import {StaticImage} from "gatsby-plugin-image"

import Link from "../components/link"
import ImageHeader from '../images/header-nosotros.jpg'

const Nosotros = () => (
  <Layout>
    <SEO title="Nosotros" />
  <HeaderLayout 
    heading="Nosotros"
    image={ImageHeader} />
   
<section className="pb-20 bg-gray-100 -mt-24">
          <div className="container mx-auto px-4 dark:bg-[#0791e6]">
            <div className="flex flex-wrap dark:bg-[#0791e6]">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg dark:bg-[#0791e6]">
                  
                </div>
              </div>

             

              <div className="pt-6 w-full md:w-4/12 px-4 text-center dark:bg-[#0791e6]">
                
              </div>
            </div>


            <div className="flex flex-wrap items-center mt-32">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto dark:bg-[#0791e6]">
               
                <h3 className="text-3xl mb-2 font-semibold leading-normal dark:text-white">
                Misión
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-800 dark:text-white">
              La formulación, coordinación, integración, orientación, ejecución, evaluación y control de las políticas, estrategias, planes, programas y acciones para la garantía, protección y disfrute de los deberes y derechos de todos los niños, niñas y adolescentes, como sujetos sociales de derecho, siguiendo los principios de igualdad, no discriminación, gratuidad de actuaciones, participación y corresponsabilidad entre el Estado, Familia y la Sociedad.              </p>
              
              
              </div>

              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto dark:bg-[#0791e6]">
                <div className="">
                <StaticImage
                   
                    src="../images/mision.jpg"
                    alt="..."
                    className="max-w-full rounded-lg shadow-lg"
                  />
                 
                </div>
              </div>

            </div>
          </div>
        </section>

<section className="relative py-20">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 dark:bg-[#0791e6]"
            style={{ height: "92px", transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden "
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-white fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
              

<h3 className="text-3xl font-semibold dark:text-white">
                     Programas de Atención
                  </h3>
                  <p className="mt-4 text-lg leading-relaxed text-gray-700 dark:text-[#becde3]">
                    - Atender a niños, niños y adolescentes que ingresan con una medida de protección, con problemas de adicción, con discapacidad y trastorno por déficit de atención.<br/> <br/>
                   - Ofrecer atención ambulatoria a niños y adolescentes con alta vulnerabilidad. <br/> <br/>
                  -  Buscar la reintegración familiar, impulsar la participación en cuanto a los procesos de formulación, ejecución y seguimiento de políticas públicas. <br/> <br/> - Difundir herramientas de formación y orientación vocacional

                  </p>
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4 mt-16 sm:mt-0">
                <div className="md:pr-12">
                     <StaticImage
                  alt="..."
                       className="max-w-full rounded-lg shadow-lg"
                       src="../images/programa-de-atencion.jpg"
                />
                                  
                </div>
              </div>
            </div>
          </div>
        </section>
  <section className="pt-20 pb-48">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center text-center mb-24">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold dark:text-white">
                  Objetivo
                </h2>
                <p className="text-lg leading-relaxed m-4 text-gray-600 dark:text-[#becde3]">
            Asegurar los derechos humanos de la infancia y la adolescencia (…) mediante la formulación, coordinación, integración, orientación, ejecución, evaluación y control de políticas, programas y acciones de interés público que ayuden a garantizar los deberes y derechos de todos los niños y adolescentes como sujetos sociales de derecho.                </p>
              </div>
            </div>
            <div className="flex w-full p-4 mr-2 bg-white rounded shadow-xl md:h-auto sm:h-40 justify-center">
              <StaticImage src="../images/nosotros2.jpg"/>
            </div> 
            
           
          </div>
        </section>
      
  </Layout>
)

export default Nosotros
