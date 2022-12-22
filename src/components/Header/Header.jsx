
import { Modal } from "../Modal/Modal"
import { WrapperHeader, Logo, BoxUser, LinkHeader, BoxAvatar, ContentAvatar, UserName } from "./Header.styled"
import logo from '../../images/svg/logo.svg'
import logout from '../../images/svg/logout.svg'
import {useEffect, useState} from 'react';


export const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
  const [show, handleShow] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 60) {
        handleShow(true)
      } else handleShow(false)
    })
    return () => {
      window.removeEventListener('scroll', () => {
      })
    }
  }, [])
   const hendeleOpenModal=()=> {
 }
    return (
        <WrapperHeader show={show}>
           <Logo to="/" end="true"><img src={logo} alt="Kapusta" width={90} /></Logo> 
          <BoxAvatar>U</BoxAvatar>
                    <UserName>User Name</UserName>
                <LinkHeader><img src={logout} alt="log-out" width={16} /></LinkHeader>
                {/* <LinkHeader><p>Exit</p></LinkHeader> */}
            <Modal isOpen={isOpen} setIsOpen={setIsOpen}/>
        </WrapperHeader>
    )


}