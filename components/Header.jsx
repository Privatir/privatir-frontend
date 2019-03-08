import Link from 'next/link'
import styled, { css } from 'styled-components'
import { propTypes } from 'react-typography/dist/GoogleFont';
import MediaQuery from 'react-responsive';

const sizes = {
    desktop: 992,
    tablet: 768,
    phone: 576,
}

// Iterate through the sizes and create a media template
const media = Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) => css`
    @media screen and (max-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `
    return acc
}, {})

const StyledAnchor = styled.a`
    text-decoration: none;
    text-transform: uppercase;
    color: #4D2C91;
    `

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
                        ${media.tablet`
                            display: none;
                         `}
                            `
const CollapsedNav = styled.div` 
                        display: none; 
                        ${media.tablet`
                            display: flex;
                            margin-right: 15px;
                        `}
                        `

const IconContainer = styled.object`
                            display: flex;
                            padding: 0.5rem;
                        `

const Header = () => (

    <div style={{ display: `flex`, justifyContent: `space-between`, alignItems: `center` }}>
        <Logo>
            <MediaQuery query="(max-width: 576px)">
                <IconContainer type="image/svg+xml" data="https://s3.amazonaws.com/privatir.com/privatir-shortform.svg"
                    className=""
                    width="50"
                    height="50">
                </IconContainer>
            </MediaQuery>
            <MediaQuery query="(min-width: 577px)">
                <IconContainer type="image/svg+xml" data="https://s3.amazonaws.com/privatir.com/Privatir-logo.svg"
                    className=""
                    width="200"
                    height="200">
                </IconContainer>
            </MediaQuery>

        </Logo>
        <PrimaryNav>
            <Link href="/">
                <StyledAnchor>Home</StyledAnchor>
            </Link>
            <Link href="/about">
                <StyledAnchor>About</StyledAnchor>
            </Link>
            <Link href="/contact">
                <StyledAnchor>Contact</StyledAnchor>
            </Link>
            <Link href="/blog">
                <StyledAnchor>Blog</StyledAnchor>
            </Link>
        </PrimaryNav>
        <CollapsedNav >
            <i className="fas fa-bars" />
        </CollapsedNav>

    </div >

)

export default Header