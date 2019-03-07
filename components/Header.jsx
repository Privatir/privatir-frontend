import Link from 'next/link'
import styled, { css } from 'styled-components'

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
        margin-left: 2rem;
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

const Header = () => (

    <div style={{ display: `flex`, justifyContent: `space-between`, alignItems: `center` }}>
        <Logo>
            <object type="image/svg+xml"
                data="https://s3.amazonaws.com/privatir.com/Privatir-logo.svg"
                className="logo"
                width="200"
                height="100">
            </object>
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
            <i class="fas fa-bars" />
        </CollapsedNav>

    </div>

)

export default Header