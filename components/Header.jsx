import Link from 'next/link'
import styled, { css } from 'styled-components'
import MediaQuery from 'react-responsive';
import { withRouter } from "next/router";
import { Children } from "react";

const SignIn = styled.button`
                background-color: #ffffff;
                border: 1px solid #4D2C91;
                border-radius: 2px;
                color: #4D2C91;
                &:hover {
                    background-color: #4D2C91;
                }
                &:hover a {
                    color:#FFF7F7;
                }


            `

const StyledAnchor = styled.a`
    text-transform: uppercase;
    color: #4D2C91;
    text-decoration: none;
    ${({ active }) => active && `
        color: #7E57C2;
        text-decoration: solid;
    `}`

const Logo = styled.div`
        display: flex;
        margin-left: 1rem;
        align-items: center;
        padding-left: 1rem;
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
                <svg type="image/svg+xml" data="https://s3.amazonaws.com/privatir.com/privatir-shortform.svg"
                    width="50"
                    height="50" style={{ padding: `5px` }}>
                    <a href="/" >
                        <image xlinkHref="https://s3.amazonaws.com/privatir.com/privatir-shortform.svg" height="40" width="40" />
                    </a>
                </svg>
            </Logo>
        </MediaQuery>
        {/** > TABLET */}
        <MediaQuery query="(min-width: 577px)">
            <Logo>
                <svg width="150" height="100"
                    xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <a href="/">
                        <image xlinkHref="https://s3.amazonaws.com/privatir.com/Privatir-logo.svg" height="100" width="150" />
                    </a>
                </svg>
            </Logo >
        </MediaQuery >
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
                <SignIn>
                    <a href="#">Sign In</a>
                </SignIn>
            </PrimaryNav>
        </MediaQuery >
    </div >

)

export default Header