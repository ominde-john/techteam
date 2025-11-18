import PageHeader from "../components/PageHeader";
import ShowcaseSection from "../components/home/ShowcaseSection";

const ShowcasePage = () => {
  return (
    <div>
      <PageHeader
        title="Showcase"
        description="Explore our featured projects and community highlights"
      />
      <ShowcaseSection />
    </div>
  );
};

export default ShowcasePage;
