import React from 'react'
import { push } from 'react-router-redux'
import { connect } from 'react-redux'
import ImageHeroHeader from '../components/HeroHeader/ImageHeroHeader'
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Button from 'antd/lib/button';

const Home = props => (
    <div>
        <ImageHeroHeader
            minHeight={85}
            backgroundImageUrl={
                'https://res.cloudinary.com/dxlb0hdxg/image/upload/v1508857581/Web_Header_2_-min_xpf4gz.jpg'
            }
        >
            <Row
                type="flex"
                justify="center"
                align="middle"
                className="text-center"
            >
                <Col xs={20} md={20}>
                    <h1>Home</h1>
                    <h3 style={{ paddingTop: '20px' }}>
                        Welcome home!
                    </h3>
                    <Button onClick={() => props.changePage()} type="primary">Go to about page via redux</Button>
                </Col>

            </Row>
        </ImageHeroHeader>
    </div>
);

const mapDispatchToProps  = (dispatch) => ({
    changePage: () => dispatch(push('/about-us'))
});

export default connect(
    null,
    mapDispatchToProps
)(Home)