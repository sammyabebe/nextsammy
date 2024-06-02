import {NavbarDemo,} from "./test";
import { PlaceholdersAndVanishInputDemo} from "./test2";
import { SignupFormDemo} from "./test3";
import { HeroParallaxDemo} from "./test4";
import { FlipWordsDemo} from "./test5";
import { GoogleGeminiEffectDemo} from "./test6";
import { SparklesPreview} from "./test7";
import { ThreeDCardDemo} from "./test8";
export default function Home() {
  return (
    <main>
    <NavbarDemo></NavbarDemo>
    <HeroParallaxDemo></HeroParallaxDemo>
    <SparklesPreview></SparklesPreview>
    {/* <PlaceholdersAndVanishInputDemo></PlaceholdersAndVanishInputDemo> */}
    <SignupFormDemo></SignupFormDemo>
    <FlipWordsDemo></FlipWordsDemo>
    <GoogleGeminiEffectDemo></GoogleGeminiEffectDemo>
    <ThreeDCardDemo></ThreeDCardDemo>
    </main>
  );
}