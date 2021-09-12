import React, { useState } from 'react'
import Layout from '../components/layout'
import SEO from "../components/Seo"
import { Tabs, Tab, } from '../components/Tabs'
import Link from '../components/link'
import {EspList} from '../components/Especies/EspList'

const Guide = () => {

   const [activeTab, setActiveTab] = useState(0)

  const handleTabSwitch = e => {
    const index = parseInt(e.target.id, 0)
    if (index !== activeTab) {
      setActiveTab(index)
    }
  }






  return (
    <Layout >
 <SEO title="Guía de Especie" />
       <div className="text-center max-w-xl mx-auto pt-4">
      <h1 className="text-6xl md:text-7xl font-bold mb-5 mt-12 text-gray-600 dark:text-white">Guía de Especies</h1>
      
<div className="mt-8 flex justify-center">
            <div className="inline-flex rounded-md bg-yellow-600 shadow">
                <Link to="/guide/search" className="text-gray-200 font-bold py-2 px-6">
                    Buscar
                </Link>
            </div>
        </div>

       </div>

    
        
   {/* ------------ Books Section ------------ */}





    </Layout>
  )
}

export default Guide

