import { ConnectButton } from '@rainbow-me/rainbowkit'
import 'bulma/css/bulma.min.css';
import { useAccount } from 'wagmi'
import Todolistt from './Todolistt'
import { Account } from './components'
import RefreshButton from './RefreshButton'
import Navbar from './Navbar'
import Header from './Header'
import Content from './Content'
import Footer from './Footer'


export function App() {
  const { isConnected } = useAccount()
  return (
    <>
      <div style={{backgroundColor:'#c97fbc',overflow:'hidden'}}>
    {/* <ConnectButton /> */}
    
      <Navbar/>
      <Header/>
      <Todolistt/>
      {/* {isConnected && <Account />} */}
      <RefreshButton/>
      <Content/>
      <Footer/>
      </div>

    </>
  )
}
