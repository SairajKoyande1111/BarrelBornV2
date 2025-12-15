import { Utensils, Star } from "lucide-react";
import { SiInstagram, SiFacebook, SiYoutube } from "react-icons/si";
import { useLocation } from "wouter";
import { useWelcomeAudio } from "../hooks/useWelcomeAudio";
import { MediaPreloader } from "../components/media-preloader";
import { useState, useCallback } from "react";
import logoImage from "@assets/Untitled_design_(20)_1765720426678.png";
import bgPattern from "@assets/dark_bg_pattern.png";

export default function Welcome() {
  const [, setLocation] = useLocation();
  const { hasPlayedAudio, audioError, isReady } = useWelcomeAudio();
  const [mediaReady, setMediaReady] = useState(false);

  const handleSocialClick = useCallback((url: string) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) {
      (document.activeElement as HTMLElement)?.blur();
    }
  }, []);

  return (
    <div 
      className="min-h-screen w-full overflow-auto" 
      style={{ 
        backgroundImage: `url(${bgPattern})`, 
        backgroundRepeat: 'no-repeat', 
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <MediaPreloader onComplete={() => setMediaReady(true)} />

      {/* Main content container - compact spacing, minimal top padding */}
      <div className="flex flex-col items-center w-full px-4 pt-0 pb-2">

        {/* Logo Image - big and at top */}
        <div className="flex flex-col items-center w-full">
          <img
            src={logoImage}
            alt="Barrelborn Dine & Draft"
            className="w-[420px] h-auto"
          />
        </div>

        {/* Social Media Icons - directly under logo, negative margin to compensate for logo whitespace */}
        <div className="flex gap-4 -mt-16">
          <button
            onClick={() => handleSocialClick("https://www.instagram.com/mingschinesecuisine.in?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==")}
            className="w-12 h-12 border rounded-md flex items-center justify-center transition-opacity hover:opacity-80"
            style={{ borderColor: '#dcd4c8', backgroundColor: 'transparent' }}
          >
            <SiInstagram className="w-6 h-6" style={{ color: '#dcd4c8' }} />
          </button>
          <button
            onClick={() => handleSocialClick("https://facebook.com")}
            className="w-12 h-12 border rounded-md flex items-center justify-center transition-opacity hover:opacity-80"
            style={{ borderColor: '#dcd4c8', backgroundColor: 'transparent' }}
          >
            <SiFacebook className="w-6 h-6" style={{ color: '#dcd4c8' }} />
          </button>
          <button
            onClick={() => handleSocialClick("https://youtube.com")}
            className="w-12 h-12 border rounded-md flex items-center justify-center transition-opacity hover:opacity-80"
            style={{ borderColor: '#dcd4c8', backgroundColor: 'transparent' }}
          >
            <SiYoutube className="w-6 h-6" style={{ color: '#dcd4c8' }} />
          </button>
        </div>

        {/* Explore Menu Button */}
        <button
          onClick={() => setLocation("/menu")}
          className="mt-8 px-12 py-4 font-semibold border-2 rounded-full transition-colors flex items-center gap-3 text-lg"
          style={{ borderColor: '#B8986A', color: '#dcd4c8', backgroundColor: 'transparent' }}
        >
          <Utensils className="w-6 h-6" style={{ color: '#dcd4c8' }} />
          <span>EXPLORE OUR MENU</span>
        </button>

        {/* Rating Section */}
        <div className="text-center mt-6">
          <p className="font-medium text-lg mb-3" style={{ color: '#dcd4c8' }}>
            Click to Rate us on Google
          </p>
          <div
            className="flex justify-center cursor-pointer gap-2"
            onClick={() => window.open("https://g.page/r/CePLzPaLyBLNEAI/review")}
          >
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-9 h-9" style={{ color: '#B8986A', fill: '#B8986A' }} />
            ))}
          </div>
        </div>

        {/* Address Section */}
        <div className="text-center mt-6">
          <div
            className="border-2 rounded-full inline-block px-6 py-1.5 mb-3"
            style={{ borderColor: '#B8986A' }}
          >
            <span className="font-semibold text-base" style={{ color: '#dcd4c8' }}>ADDRESS</span>
          </div>
          <div className="leading-relaxed text-base" style={{ color: '#E8DFD1' }}>
            <p>Shop No: 3, Madanlal Dhingra Rd,</p>
            <p>beside Satranj Wafers, Bhakti Mandir,</p>
            <p>Panch Pakhdi, Thane West</p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center mt-5">
          <div
            className="border-2 rounded-full inline-block px-6 py-1.5 mb-3"
            style={{ borderColor: '#B8986A' }}
          >
            <span className="font-semibold text-base" style={{ color: '#dcd4c8' }}>CONTACT</span>
          </div>
          <div className="text-base" style={{ color: '#E8DFD1' }}>
            <p>+91 1234567890</p>
            <p>info@barrelborn.in</p>
          </div>
        </div>

        {/* Website URL */}
        <p
          className="mt-5 cursor-pointer text-base"
          style={{ color: '#B8986A' }}
          onClick={() => window.open("https://www.barrelborn.in", "_blank")}
        >
          www.barrelborn.in
        </p>

        {/* Developer Credit */}
        <div className="text-center mt-4 mb-4 text-sm" style={{ color: '#E8DFD1' }}>
          <p>Developed By</p>
          <p
            className="font-medium cursor-pointer"
            onClick={() => window.open("http://www.airavatatechnologies.com", "_blank")}
            style={{ color: '#B8986A' }}
          >
            AIRAVATA TECHNOLOGIES
          </p>
        </div>

      </div>
    </div>
  );
}
