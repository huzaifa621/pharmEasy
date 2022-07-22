import { ChooseUs } from "./ChooseUs";
import { Customer } from "./Customer";
import { FeaturedBrand } from "./FeaturedBrand";
import { HealthArticles } from "./HealthArticles";
import { JustOffer } from "./JustOffer";
import { LabTest } from "./LabTest";
import { OfferCards } from "./OfferCards";
import { PharmEasyPlus } from "./PharmEasyPlus";
import { QAns } from "./QAns";
import { TopSlider } from "./TopSlider";

const Main = () => {
  return (
    <>
      <TopSlider />
      <OfferCards />
      <PharmEasyPlus />
      <JustOffer />
      <LabTest />
      <FeaturedBrand />
      <HealthArticles />
      <ChooseUs />
      <Customer />
      <QAns />
    </>
  );
};

export { Main };
