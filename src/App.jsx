import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Layouts from './Admin/Layouts'
import Home from './Routers/Home'
import Explorer from './Routers/Explorer'
import Notify from './Routers/Notify'
import Login from './Services/Login'
import Yaguar from './Page/Yaguar'
import Makro from './Page/Makro'
import Vital from './Page/Vital'
import LoadingScreen from './Page/LoadingScreen'
import { useState } from 'react'
import Services from './Routers/Services'
import Shipments from './Services/shipments'
import Shopping from './Services/Shopping'
import CustomerSupport from './Services/CustomerSupport'
import PointCredit from './Services/PointCredit'
import EnEspera from './Page/EnEspera'
import Google from './Routers/Google'
import PrincipalDesign from './Components/design/PrincipalDesign'
import PrincipalHome from './Routers/PrincipalHome'
import PrincipalLayout from './Admin/PrincipalLayout'
import PanelAstra from './Tasks/PanelAstra'
import Education from './Routers/Education'
import Offer from './Routers/Offert/Offer'
import DefaultHome from './Tasks/Search/principalHome/DefaultHome'

/* auth */
import PrivatePage from './private/PrivatePage'
import Mcdonals from './Routers/RouteEnterprise/Mcdonals'
import Libertad from './Routers/RouteEnterprise/Libertad'
import California from './Routers/RouteEnterprise/California'
import Changomas from './Routers/RouteEnterprise/Changomas'
import ProtectedRoute from './private/ProtectedRoute'
import { useAuth0 } from "@auth0/auth0-react"


function App() {

  let [loading, setLoading] = useState(true)

  
  const { user} = useAuth0();
  return (
    <>
      <div className='App'>
              {loading ? (
          <LoadingScreen setLoading={setLoading} />
        ) : (
            <BrowserRouter>
            <Routes>
              <Route path="/" element={<PrincipalLayout/>}>
                  <Route  element={<ProtectedRoute canActivated={user}/>}>
                      <Route path='aprender' element={<Education/>} />
                  </Route>

                  <Route index element={<DefaultHome/>} />
                  <Route path='google' element={<Google/>} />
                  <Route path='servicios' element={<Services/>} />
                  
                  <Route path='explorar' element={<PrincipalHome/>} />{/* explorar / */}
                  <Route path='ejemplo' element={<Explorer/>} />{/* explorar / */}
                  {/* <Route path='notificacion' element={<Notify/>} /> */}{/* ofertas */}
                  <Route path='offer' element={<Offer/>} />{/* ofertas */}
                  <Route path='login' element={<Login/>} />
                  <Route path='envios' element={<Shipments/>} />
                  <Route path='compra' element={<Shopping/>} />
                  <Route path='credito' element={<PointCredit/>} />
                  <Route path='soporte' element={<CustomerSupport/>} />
                  <Route path='panelastra' element={<PanelAstra/>} />
                  {/* en espera */}
                  <Route path='empresa' element={<EnEspera/>} />
                  {/* empresas */}
                  <Route path='nike' element={<PrincipalDesign/>} />
                  
                  <Route path='mcdonals' element={<Mcdonals/>} />
                  <Route path='libertad' element={<Libertad/>} />
                  <Route path='california' element={<California/>} />
                  <Route path='yaguar' element={<Yaguar/>} />
                  <Route path='makro' element={<Makro/>} />
                  <Route path='vital' element={<Vital/>} />
                  <Route path='changomas' element={<Changomas/>} />

                  {/* pirvate */}
                  <Route path='private' element={<PrivatePage/>} />
                  
                  
              </Route>
            </Routes>
        </BrowserRouter>
        )}
      </div>
    </>
  )
}

export default App

