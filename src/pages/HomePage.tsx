import { PrepSection } from "@/components/Homepage/PrepSection";
import { ReviewSection } from "@/components/Homepage/ReviewSection";
import { WelcomeSection } from "@/components/Homepage/WelcomeSection";

export const HomePage = () => {
  return (
    <div>
      <WelcomeSection />
      <PrepSection />
      <ReviewSection />
    </div>
  );
};
