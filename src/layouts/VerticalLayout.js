// !Do not remove the Layout import
import Layout from '@layouts/VerticalLayout'

// ** Components
import CustomNavbar from './components/Navbar'
import CustomFooter from "./components/Footer"
import CustomMenu from "./components/Menu"

const VerticalLayout = props => (
    <Layout  {...props}
        // navbar={<CustomNavbar {...props} />}
        // footer={<CustomFooter {...props} />}
        // menu={<CustomMenu {...props} />}
        >
        {props.children}
    </Layout>
)

export default VerticalLayout