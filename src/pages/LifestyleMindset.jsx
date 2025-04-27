import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBrain, faComment, faHeart, faClock, faBookOpen, faSpa } from "@fortawesome/free-solid-svg-icons";
import { FaLeaf, FaRegImage } from "react-icons/fa";
import girl from "../assets/images/stress.jpg"
import { FaBell, FaBolt, FaHeadphones } from "react-icons/fa";
import yoga from "../assets/images/yoga.jpg";
import walking from "../assets/images/walking.jpg";
import dancing from "../assets/images/dancing.jpg";
import training from "../assets/images/training.jpg";
import Header from '../components/Header';
import Footer from "../components/Footer";


const Section = () => {
  return (
    <>
    <Header/>
    <section className="py-12 px-6 text-center">
      {/* Header Section */}
      <div className="bg-green-500 text-white py-12">
        <h1 className="text-4xl font-bold">Cultivate a Healthy Lifestyle & Mindset</h1>
        <p className="mt-2 text-lg">Discover holistic approaches to wellness that nourish your body, mind, and spirit.</p>
        <button className="mt-4 px-6 py-2 bg-white text-green-600 font-semibold rounded-full">Begin Your Journey</button>
      </div>
      
      {/* The Power of Mindset */}
      <h2 className="text-3xl font-semibold mt-12">The Power of Mindset</h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white shadow-md p-6 rounded-lg flex items-start space-x-4">
          <FontAwesomeIcon icon={faBrain} className="h-8 w-8 text-green-500" />
          <div>
            <h3 className="text-xl font-bold">Growth Mindset</h3>
            <p className="mt-2 text-gray-600">Embrace challenges and see failures as learning opportunities.</p>
          </div>
        </div>
        
        <div className="bg-white shadow-md p-6 rounded-lg flex items-start space-x-4">
          <FontAwesomeIcon icon={faComment} className="h-8 w-8 text-green-500" />
          <div>
            <h3 className="text-xl font-bold">Positive Self-Talk</h3>
            <p className="mt-2 text-gray-600">Transform negative thoughts into empowering affirmations.</p>
          </div>
        </div>
        
        <div className="bg-white shadow-md p-6 rounded-lg flex items-start space-x-4">
          <FontAwesomeIcon icon={faHeart} className="h-8 w-8 text-green-500" />
          <div>
            <h3 className="text-xl font-bold">Gratitude Practice</h3>
            <p className="mt-2 text-gray-600">Foster happiness by appreciating the little moments in life.</p>
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto p-8 space-y-8">
  <h2 className="text-3xl font-bold text-center">Stress Management</h2>
  <p className="text-gray-600 text-center max-w-2xl mx-auto">
    Effective techniques to reduce stress and create more balance in your life.
  </p>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {/* Left Section - Image + Meditation Practice */}
    <div className="space-y-4 p-0 ml-[-100px]">
      {/* Meditation Image */}
      <div className="bg-gray-100 p-6 rounded-xl flex justify-center">
        <img
          src={girl}
          alt="Meditation"
          className="w-full h-[200px] object-cover rounded-lg shadow-md"
        />
      </div>

      {/* Meditation Description */}
      <div className="bg-purple-100 p-6 rounded-xl w-full ">
        <h3 className="text-lg font-semibold">Meditation Practice</h3>
        <p className="text-gray-600">
          Regular meditation reduces stress hormones, improves focus, and promotes
          emotional regulation. Even 5-10 minutes daily can make a significant difference.
        </p>
      </div>
    </div>

    {/* Right Section - Deep Breathing & Journaling */}
    <div className="space-y-4">
      {/* Deep Breathing */}
      <div className="bg-green-100 p-6 rounded-xl flex items-start space-x-4 ">
        <FaLeaf className="text-green-600 text-3xl" />
        <div>
          <h3 className="text-lg font-semibold">Deep Breathing</h3>
          <p className="text-gray-600">
            Activates the parasympathetic nervous system, triggering relaxation.
            Try the 4-7-8 technique: inhale for 4 counts, hold for 7, exhale for 8.
          </p>
        </div>
      </div>

      {/* Journaling */}
      <div className="bg-blue-100 p-6 rounded-xl flex items-start space-x-4">
        <FontAwesomeIcon icon={faBookOpen} className="text-blue-600 text-3xl" />
        <div>
          <h3 className="text-lg font-semibold">Journaling</h3>
          <p className="text-gray-600">
            Writing down thoughts and feelings helps process emotions and gain perspective.
            Spend 10 minutes daily with free-form writing or guided prompts.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

{/* sleep  */}
<div className="bg-white min-h-screen flex flex-col items-center p-8">
      <h1 className="text-3xl font-bold text-center">Sleep Optimization</h1>
      <p className="text-gray-600 text-center mb-6">
        Quality sleep is essential for physical health, mental clarity, and emotional wellbeing
      </p>
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl w-full">
        {/* Science of Sleep */}
        <div className="bg-gray-100 shadow-lg rounded-lg p-6 flex flex-col">
          <h2 className="flex items-center text-xl font-semibold mb-4">
            <span className="text-green-500 text-2xl mr-2"></span> The Science of Sleep
          </h2>
          <p className="text-gray-700 mb-3">
            Sleep is not merely rest—it's an active period of restoration and processing. During sleep, your body:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li className="flex items-start"><span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-2"></span>Repairs tissues and strengthens immune function</li>
            <li className="flex items-start"><span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-2"></span>Consolidates memories and learning</li>
            <li className="flex items-start"><span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-2"></span>Regulates hormones that control appetite and metabolism</li>
            <li className="flex items-start"><span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-2"></span>Clears waste products from the brain</li>
            <li className="flex items-start"><span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-2"></span>Balances emotional regulation</li>
          </ul>
        </div>
        
        {/* Sleep Hygiene Practices */}
        <div className="bg-gray-100 shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Sleep Hygiene Practices</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="bg-green-500 text-white rounded-full px-3 py-1 mr-3">1</span>
              <div>
                <p className="font-semibold">Consistent Schedule</p>
                <p className="text-gray-700">Go to bed and wake up at the same times daily, even on weekends, to regulate your body's internal clock.</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-green-500 text-white rounded-full px-3 py-1 mr-3">2</span>
              <div>
                <p className="font-semibold">Optimize Your Environment</p>
                <p className="text-gray-700">Keep your bedroom cool (65-68°F), dark, and quiet. Consider blackout curtains, white noise machines, or earplugs if needed.</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-green-500 text-white rounded-full px-3 py-1 mr-3">3</span>
              <div>
                <p className="font-semibold">Limit Screen Time</p>
                <p className="text-gray-700">Avoid screens 1-2 hours before bed. Blue light suppresses melatonin production, making it harder to fall asleep.</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-green-500 text-white rounded-full px-3 py-1 mr-3">4</span>
              <div>
                <p className="font-semibold">Watch Your Consumption</p>
                <p className="text-gray-700">Avoid caffeine after noon and limit alcohol, which disrupts REM sleep. Finish eating 2-3 hours before bedtime.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

    {/* joyful */}
    <div className="bg-gray-100 min-h-screen flex flex-col items-center p-8">
      <h1 className="text-3xl font-bold text-center">Joyful Movement</h1>
      <p className="text-gray-600 text-center mb-6">
        Find physical activities you genuinely enjoy for sustainable fitness and wellbeing
      </p>
      
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-6">
        {/* Text Section */}
        <div className="flex flex-col gap-6">
          {/* Benefits of Regular Movement */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Benefits of Regular Movement</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Improves mood by releasing endorphins</li>
              <li>Reduces stress and anxiety</li>
              <li>Enhances cognitive function and creativity</li>
              <li>Improves sleep quality</li>
              <li>Boosts energy and reduces fatigue</li>
              <li>Strengthens immune function</li>
            </ul>
          </div>
          
          {/* Finding Your Movement Style */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Finding Your Movement Style</h2>
            <p className="text-gray-700 mb-3">Consider these questions to discover activities you'll genuinely enjoy:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Do you prefer solo activities or social settings?</li>
              <li>Do you enjoy being outdoors or indoors?</li>
              <li>Do you like structure or flexibility?</li>
            </ul>
          </div>
        </div>
        
        {/* Image Cards Section */}
<div className="grid grid-cols-2 gap-6">
  <div className="bg-white shadow-lg rounded-lg p-6">
    <img src={yoga}  alt="Yoga & Stretching" className="w-full h-32 object-cover rounded-md mb-4" />
    <h3 className="text-lg font-semibold">Yoga & Stretching</h3>
    <p className="text-gray-700">Improves flexibility, balance, and mind-body connection. Great for stress reduction and recovery.</p>
  </div>
  
  <div className="bg-white shadow-lg rounded-lg p-6">
    <img src={walking}  alt="Walking & Hiking" className="w-full h-32 object-cover rounded-md mb-4" />
    <h3 className="text-lg font-semibold">Walking & Hiking</h3>
    <p className="text-gray-700">Accessible, low-impact activity that combines movement with nature for mental clarity.</p>
  </div>
  
  <div className="bg-white shadow-lg rounded-lg p-6">
    <img src={dancing} alt="Dance & Movement" className="w-full h-32 object-cover rounded-md mb-4" />
    <h3 className="text-lg font-semibold">Dance & Movement</h3>
    <p className="text-gray-700">Joyful expression through movement that improves coordination, mood, and cardiovascular health.</p>
  </div>

  <div className="bg-white shadow-lg rounded-lg p-6">
    <img src={training}  alt="Strength Training" className="w-full h-32 object-cover rounded-md mb-4" />
    <h3 className="text-lg font-semibold">Strength Training</h3>
    <p className="text-gray-700">Builds muscle, boosts metabolism, and improves functional fitness for daily activities.</p>
  </div>
</div>

      </div>
    </div>
  {/* mindfullness */}
  <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="max-w-6xl w-full">
        <h2 className="text-3xl font-bold text-center mb-2">Mindfulness Practices</h2>
        <p className="text-center text-gray-600 mb-8">Simple techniques to cultivate present-moment awareness and inner peace</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Mindful Breathing */}
          <div className="bg-white p-8 rounded-2xl shadow-md w-full">
            <div className="flex items-center mb-4">
              <div className="bg-green-500 p-2 rounded-full">
                <FaBell className="text-white text-2xl" />
              </div>
              <h3 className="ml-2 text-xl font-semibold">Mindful Breathing</h3>
            </div>
            <p className="text-gray-600 mb-4">
              The simplest form of meditation. Focus your attention on your breath—the inhale and exhale—without trying to control it.
            </p>
            <h4 className="font-semibold">Practice: Box Breathing</h4>
            <ul className="list-disc list-inside text-gray-600 mt-2">
              <li>Inhale for 4 counts</li>
              <li>Hold for 4 counts</li>
              <li>Exhale for 4 counts</li>
              <li>Hold for 4 counts</li>
              <li>Repeat for 2-5 minutes</li>
            </ul>
          </div>
          {/* Body Scan */}
          <div className="bg-white p-8 rounded-2xl shadow-md w-full">
            <div className="flex items-center mb-4">
              <div className="bg-green-500 p-2 rounded-full">
                <FaBolt className="text-white text-2xl" />
              </div>
              <h3 className="ml-2 text-xl font-semibold">Body Scan</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Systematically bring attention to different parts of your body, noticing sensations without judgment.
            </p>
            <h4 className="font-semibold">Practice: Mini Body Scan</h4>
            <ul className="list-disc list-inside text-gray-600 mt-2">
              <li>Start at your feet and move upward</li>
              <li>Notice sensations in each body part</li>
              <li>Breathe into areas of tension</li>
              <li>Continue to your head</li>
              <li>End with awareness of your whole body</li>
            </ul>
          </div>
          {/* Mindful Listening */}
          <div className="bg-white p-8 rounded-2xl shadow-md w-full">
            <div className="flex items-center mb-4">
              <div className="bg-green-500 p-2 rounded-full">
                <FaHeadphones className="text-white text-2xl" />
              </div>
              <h3 className="ml-2 text-xl font-semibold">Mindful Listening</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Fully focus on sounds around you or in music without labeling or judging.
            </p>
            <h4 className="font-semibold">Practice: Sound Awareness</h4>
            <ul className="list-disc list-inside text-gray-600 mt-2">
              <li>Close your eyes or soften your gaze</li>
              <li>Notice the most prominent sounds</li>
              <li>Expand awareness to subtle sounds</li>
              <li>Notice the quality of each sound</li>
              <li>Return to sounds when mind wanders</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  {/* daily */}
  <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6 mt-7">
      <div className="max-w-6xl w-full text-left">
        <h2 className="text-3xl font-bold mb-2">Mindfulness Practices</h2>
        <p className="text-gray-600 mb-8">Simple techniques to cultivate present-moment awareness and inner peace</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Mindful Breathing */}
          <div className="bg-white p-8 rounded-2xl shadow-md w-full">
            <div className="flex items-center mb-4">
              <div className="bg-green-500 p-2 rounded-full">
                <FaBell className="text-white text-2xl" />
              </div>
              <h3 className="ml-2 text-xl font-semibold">Mindful Breathing</h3>
            </div>
            <p className="text-gray-600 mb-4">
              The simplest form of meditation. Focus your attention on your breath—the inhale and exhale—without trying to control it.
            </p>
            <h4 className="font-semibold">Practice: Box Breathing</h4>
            <ul className="list-disc list-inside text-gray-600 mt-2">
              <li>Inhale for 4 counts</li>
              <li>Hold for 4 counts</li>
              <li>Exhale for 4 counts</li>
              <li>Hold for 4 counts</li>
              <li>Repeat for 2-5 minutes</li>
            </ul>
          </div>
          {/* Body Scan */}
          <div className="bg-white p-8 rounded-2xl shadow-md w-full">
            <div className="flex items-center mb-4">
              <div className="bg-green-500 p-2 rounded-full">
                <FaBolt className="text-white text-2xl" />
              </div>
              <h3 className="ml-2 text-xl font-semibold">Body Scan</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Systematically bring attention to different parts of your body, noticing sensations without judgment.
            </p>
            <h4 className="font-semibold">Practice: Mini Body Scan</h4>
            <ul className="list-disc list-inside text-gray-600 mt-2">
              <li>Start at your feet and move upward</li>
              <li>Notice sensations in each body part</li>
              <li>Breathe into areas of tension</li>
              <li>Continue to your head</li>
              <li>End with awareness of your whole body</li>
            </ul>
          </div>
          {/* Mindful Listening */}
          <div className="bg-white p-8 rounded-2xl shadow-md w-full">
            <div className="flex items-center mb-4">
              <div className="bg-green-500 p-2 rounded-full">
                <FaHeadphones className="text-white text-2xl" />
              </div>
              <h3 className="ml-2 text-xl font-semibold">Mindful Listening</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Fully focus on sounds around you or in music without labeling or judging.
            </p>
            <h4 className="font-semibold">Practice: Sound Awareness</h4>
            <ul className="list-disc list-inside text-gray-600 mt-2">
              <li>Close your eyes or soften your gaze</li>
              <li>Notice the most prominent sounds</li>
              <li>Expand awareness to subtle sounds</li>
              <li>Notice the quality of each sound</li>
              <li>Return to sounds when mind wanders</li>
            </ul>
          </div>
        </div>
        {/* Mindfulness in Daily Life */}
        <div className="bg-green-100 p-6 rounded-2xl mt-8 flex justify-between items-center">
          <div>
            <h3 className="text-lg font-semibold text-green-700">Mindfulness in Daily Life</h3>
            <p className="text-green-700 mb-2">
              Formal meditation is valuable, but mindfulness can be practiced throughout your day in simple ways:
            </p>
            <ul className="list-disc list-inside text-green-700">
              <li>Eat one meal without distractions, noticing flavors and textures</li>
              <li>Take three mindful breaths before checking your phone</li>
              <li>Feel the sensation of water during handwashing or showering</li>
              <li>Notice the feeling of your feet touching the ground while walking</li>
            </ul>
          </div>
          <button className="bg-green-500 text-white px-4 py-2 rounded-full font-semibold">
            Try Guided Meditation
          </button>
        </div>
      </div>
    </div>

    </section>
    <Footer />
    </>
  );
};

export default Section;
