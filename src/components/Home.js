import React from 'react'
import styled from "styled-components"
import Section from "./Section"

function Home() {
    return (
        <Container>
            <Section
                title="Model S"
                description="Order Online for Touchless Delivery"
                backgroundimg="Model-s.jpg"
                leftBtnText="Custom order"
                rightBtnText="Existing inventory"
                />
            <Section
                title="Model Y"
                description="Order Online for Touchless Delivery"
                backgroundimg="Model-y.jpg"
                leftBtnText="Custom order"
                rightBtnText="Existing inventory"
                 />
            <Section
                title="Model 3"
                description="Order Online for Touchless Delivery"
                backgroundimg="Model-3.jpg"
                leftBtnText="Custom order"
                rightBtnText="Existing inventory"
                />
            
            <Section
                title="Model X"
                description="Order Online for Touchless Delivery"
                backgroundimg="Model-x.jpg"
                leftBtnText="Custom order"
                rightBtnText="Existing inventory"
                />
            <Section
                title="Lower Cost Solar Panels in America"
                description="Money-back guarantee"
                backgroundimg="solar-panel.jpg"
                leftBtnText="Order now"
                rightBtnText="Learn more"
            />

            <Section 
            title="Solar for New Roofs"
            description="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
            backgroundimg="solar-roof.jpg"
            leftBtnText="Order now"
            rightBtnText="Learn more"
            />

            <Section 
            title="Accessories"
            description=""
            backgroundimg="accessories.jpg"
            leftBtnText="Shop now"            
            />
        </Container>
    )
}

export default Home

const Container = styled.div`
    height: 100vh;
`