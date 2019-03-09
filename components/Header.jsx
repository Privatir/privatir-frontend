import Link from 'next/link'
import styled, { css } from 'styled-components'
import MediaQuery from 'react-responsive';
import { withRouter } from "next/router";
import { Children } from "react";



const StyledAnchor = styled.a`
    text-transform: uppercase;
    color: #4D2C91;
    ${({ active }) => active && `
        color: #7E57C2 ;
    `}`

const Logo = styled.div`
        display: flex;
        margin-left: 1rem;
        align-items: center;
    `
const PrimaryNav = styled.div`
                        display: flex;
                        margin-right: 2rem;
                        align-items: center;
                        justify-content: space-around;
                        width: 500px;
                            `
const CollapsedNav = styled.div` 
                        margin-right: 2rem;
                        `

const IconContainer = styled.object`
                            display: flex;
                            padding: 0.5rem;
                        `

const ActiveLink = withRouter(({ router, children, ...props }) => (
    <Link {...props}>
        {React.cloneElement(Children.only(children), {
            active: router.pathname === props.href ? true : false
        })}
    </Link>
));

const Header = () => (

    <div style={{ display: `flex`, justifyContent: `space-between`, alignItems: `center` }}>
        {/** MOBILE */}
        <MediaQuery query="(max-width: 576px)">
            <Logo>
                <IconContainer type="image/svg+xml" data="https://s3.amazonaws.com/privatir.com/privatir-shortform.svg"
                    className=""
                    width="50"
                    height="50">
                </IconContainer>
            </Logo>
        </MediaQuery>
        {/** > TABLET */}
        <MediaQuery query="(min-width: 577px)">
            <Logo>
                <IconContainer type="image/svg+xml" data="https://s3.amazonaws.com/privatir.com/Privatir-logo.svg"
                    className=""
                    width="200">
                </IconContainer>
            </Logo >
        </MediaQuery>
        {/** MOBILE */}
        < MediaQuery query="(max-width: 576px)" >
            <CollapsedNav >
                <i className="fas fa-bars" />
            </CollapsedNav>
        </MediaQuery >
        {/** > TABLET */}
        < MediaQuery query="(min-width: 577px)" >
            <PrimaryNav>
                <ActiveLink href="/">
                    <StyledAnchor>Home</StyledAnchor>
                </ActiveLink>
                <ActiveLink href="/about">
                    <StyledAnchor>About</StyledAnchor>
                </ActiveLink>
                <ActiveLink href="/contact">
                    <StyledAnchor>Contact</StyledAnchor>
                </ActiveLink>
                <ActiveLink href="/blog">
                    <StyledAnchor>Blog</StyledAnchor>
                </ActiveLink>
            </PrimaryNav>
        </MediaQuery >
    </div >

)

export default Header