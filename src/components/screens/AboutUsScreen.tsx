import React from 'react';
import { Heart, Award, BookOpen, CheckCircle, Facebook } from 'lucide-react';

interface AboutUsScreenProps {
  onExplorePrograms?: () => void;
  onContactUs?: () => void;
}

export const AboutUsScreen: React.FC<AboutUsScreenProps> = () => {
  return (
    <div className="w-full bg-white flex flex-col font-sans">
      {/* Page Header Banner: changed from skyblue to Blue #2b5da6 */}
      <section className="bg-gradient-to-r from-[#2b5da6] to-[#1f4882] text-white px-6 lg:px-12 py-10 shadow-xs">
        <div className="max-w-3xl">
          <span className="text-xs uppercase font-condensed tracking-wider font-semibold text-blue-100 block mb-1">
            Empowering Every Learner Across the Philippines
          </span>
          <h1 className="font-condensed text-3xl lg:text-5xl font-bold tracking-tight">
            ABOUT <span className="lowercase">mytutorph</span>
          </h1>
          <p className="mt-3 text-xs lg:text-sm text-blue-50 leading-relaxed font-body max-w-xl">
            MyTutorPH is a dedicated educational network founded on a simple premise: every child possesses extraordinary potential when met with patience, individualized instruction, and neurodiversity-affirming support.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="https://www.facebook.com/MyTutorPhilippines"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-[#2b5da6] hover:bg-blue-50 font-condensed text-xs uppercase font-bold px-5 py-2.5 rounded-full shadow-sm transition cursor-pointer"
            >
              <Facebook className="w-4 h-4 fill-current" />
              <span>Facebook</span>
            </a>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="p-6 lg:p-10 space-y-10">
        {/* Core Pillars */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-gray-200 p-5 bg-[#fbfbfb] shadow-xs">
            <div className="w-10 h-10 rounded-full bg-blue-50 text-[#2b5da6] flex items-center justify-center mb-3">
              <Heart className="w-5 h-5" />
            </div>
            <h3 className="font-condensed text-lg font-bold text-[#35363a] uppercase mb-2">
              Affirming & Nurturing
            </h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              We create emotionally safe, judgment-free learning spaces where children feel valued, respected, and encouraged to embrace their unique neurodevelopmental profiles.
            </p>
          </div>

          <div className="border border-gray-200 p-5 bg-[#fbfbfb] shadow-xs">
            <div className="w-10 h-10 rounded-full bg-blue-50 text-[#2b5da6] flex items-center justify-center mb-3">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="font-condensed text-lg font-bold text-[#35363a] uppercase mb-2">
              Certified Specialists
            </h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              Our team consists of licensed professional teachers (LPT), SPED educators, educational diagnosticians, and behavioral mentors with years of hands-on classroom and clinic experience.
            </p>
          </div>

          <div className="border border-gray-200 p-5 bg-[#fbfbfb] shadow-xs">
            <div className="w-10 h-10 rounded-full bg-blue-50 text-[#2b5da6] flex items-center justify-center mb-3">
              <BookOpen className="w-5 h-5" />
            </div>
            <h3 className="font-condensed text-lg font-bold text-[#35363a] uppercase mb-2">
              Evidence-Based Methods
            </h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              From Orton-Gillingham multisensory literacy to structured cognitive interventions and play-based inquiry, our instructional roadmaps produce measurable confidence and retention.
            </p>
          </div>
        </section>

        {/* Our Story & Philosophy */}
        <section className="border border-gray-200 bg-white p-6 sm:p-8 shadow-xs">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <span className="text-[10px] uppercase font-condensed font-bold text-[#2b5da6] bg-blue-50 px-2.5 py-1 rounded-xs inline-block">
                Our Educational Philosophy
              </span>
              <h2 className="font-condensed text-2xl sm:text-3xl font-bold text-[#35363a] leading-tight">
                What is MyTutor?
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                MyTutor Learning Hub, a dedicated special education center committed to supporting children with diverse learning needs. Our mission is to create an inclusive, nurturing environment where every student feels valued, confident, and motivated to learn.
              </p>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                At MyTutor Teachers, we tailor our teaching approaches to meet each child&apos;s individual strengths and challenges. Our team of compassionate and trained educators work closely with students, families, and specialists to foster personal growth, independence, and academic success.
              </p>
              <div className="pt-2 space-y-2">
                <div className="flex items-center gap-2 text-xs text-gray-700">
                  <CheckCircle className="w-4 h-4 text-[#2b5da6]" />
                  <span>Personalized 1-on-1 and micro-group tutoring</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-700">
                  <CheckCircle className="w-4 h-4 text-[#2b5da6]" />
                  <span>DepEd & international curriculum alignment</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-700">
                  <CheckCircle className="w-4 h-4 text-[#2b5da6]" />
                  <span>Continuous parental collaboration & milestone debriefs</span>
                </div>
              </div>
            </div>

            <div>
              <img
                src="/assets/aistudio/MyTutorPH_34f342c4.jpg"
                alt="MyTutor special education teacher guiding students with interactive calendar board"
                className="w-full h-80 object-cover shadow-md border-2 border-white rounded-lg"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
