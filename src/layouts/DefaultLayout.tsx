import { PropsWithChildren} from "react";
import App from "../App";
import Footer from "../components/footer/Footer";
import Menu from "../components/menu/Menu";

const DefaultLayout = ({ children }: PropsWithChildren) => {
	return (
    <App>
		<div className="main-background-color">
      		<Menu />
      		{children}
			<Footer/>
		</div>	
    </App>
  );
}

export default DefaultLayout;
