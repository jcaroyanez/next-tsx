import { ReactNode } from "react";
import Header from "../../modules/Header/Header";
import Footer from "../../modules/Footer/Footer";
import Styles from './AppLayouts.module.scss';

type Props = {
  children: ReactNode
};

const AppLayouts = ({ children }: Props) => (
  <>
    <div className={Styles.gridContainer}>
      <Header></Header>
      <main className={Styles.main}>{children}</main>
      <Footer></Footer>
    </div>

    <style global jsx>{`
      html,
      body,
      #__next {
        height: 100% !important;
        width: 100% !important;
      }
    `}</style>
  </>
);

export default AppLayouts;