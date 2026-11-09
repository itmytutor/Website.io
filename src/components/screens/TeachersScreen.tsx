import React from 'react';
import { AGENTS } from '../../data/insuranceData';
import { Star, MapPin, Award, CheckCircle, GraduationCap } from 'lucide-react';
import { Agent } from '../../types';

interface TeachersScreenProps {
  onContactTeacher: () => void;
  onExplorePrograms?: () => void;
}

export const TeachersScreen: React.FC<TeachersScreenProps> = ({
  onContactTeacher,
}) => {
  // 4 MyTutor Teachers for 2 columns x 2 rows grid
  const featuredTeachers: Agent[] = [
    {
      id: 'featured-1',
      name: 'Andrew Baron',
      title: 'Executive Officer',
      city: 'Iloilo City',
      state: 'Iloilo',
      zip: '5000',
      phone: '(033) 320-1456',
      email: '',
      specialties: [],
      photo: '/assets/aistudio/12_1925e429.jpg',
      address: 'Oñate st., Iloilo city',
      hideBookingButton: true
    },
    {
      id: 'featured-2',
      name: 'Lawrence Sararaña',
      title: 'IT Support',
      city: 'San Joaquin',
      state: 'Iloilo City',
      zip: '5024',
      phone: '(033) 329-7301',
      email: '',
      specialties: [],
      photo: '/assets/aistudio/13_dca588d3.jpg',
      address: 'San Joaquin, Iloilo City',
      hideBookingButton: true
    }
  ];

  const myTutorTeachers: Agent[] = [
    {
      id: 'tutor-1',
      name: 'Jamelyn Allesa, LPT',
      title: 'Head SpEd Specialist',
      city: 'Leon',
      state: 'Iloilo',
      zip: '5026',
      phone: '(033) 320-1456',
      email: 'jamelyn.allesa@mytutorph.com',
      specialties: ['Bachelor of Special Education University of Iloilo', 'Batch 2016'],
      photo: '/assets/aistudio/6_0dfbfe3e.png',
      address: 'Leon, Iloilo'
    },
    {
      id: 'tutor-2',
      name: 'Valen May M. Cristobal, LPT',
      title: 'SpEd Specialist',
      city: 'La Paz',
      state: 'Iloilo',
      zip: '5000',
      phone: '(033) 329-7301',
      email: 'valen.cristobal@mytutorph.com',
      specialties: [],
      photo: '/assets/aistudio/8_4c144f35.png',
      address: 'La Paz, Iloilo'
    },
    {
      id: 'tutor-5',
      name: 'Rachel Faith C. Zafra, LPT',
      title: 'SpEd Specialist',
      city: 'Lapuz',
      state: 'Iloilo',
      zip: '5000',
      phone: '(033) 337-9012',
      email: 'rachel.zafra@mytutorph.com',
      specialties: [],
      photo: '/assets/aistudio/10_ceec34f7.png',
      address: 'Lapuz, Iloilo'
    },
    {
      id: 'tutor-6',
      name: 'Annamae G. Ansino',
      title: 'SpEd Associate',
      city: 'Anilao',
      state: 'Iloilo',
      zip: '5028',
      phone: '(033) 362-7821',
      email: 'annamae.ansino@mytutorph.com',
      specialties: [],
      photo: '/assets/aistudio/11_84723893.png',
      address: 'Anilao, Iloilo'
    }
  ];

  // The GiftEd Teachers below
  const giftedTeachers: Agent[] = [
    {
      id: 'tutor-3',
      name: 'Riza M. Heramis',
      title: 'Early Childhood Education',
      city: 'Manduriao',
      state: 'Iloilo',
      zip: '5000',
      phone: '(033) 321-8890',
      email: 'riza.heramis@mytutorph.com',
      specialties: [],
      photo: '/assets/aistudio/7_ad6ac611.png',
      address: 'Manduriao, Iloilo'
    },
    {
      id: 'tutor-4',
      name: 'Raquel Balasa, LPT',
      title: 'Early Childhood Education',
      city: 'Delgado',
      state: 'Iloilo City',
      zip: '5000',
      phone: '(033) 335-5524',
      email: 'raquel.balasa@mytutorph.com',
      specialties: [],
      photo: '/assets/aistudio/9_062e8021.png',
      address: 'Delgado, Iloilo City'
    }
  ];

  const renderTeacherCard = (
    teacher: Agent,
    cardBorderClass: string = 'border border-gray-200/90 hover:border-[#2b5da6]/50'
  ) => {
    let customStyle: React.CSSProperties | undefined = undefined;
    if (cardBorderClass.includes('#2b5da6')) {
      customStyle = { borderColor: '#2b5da6', borderWidth: '2px', borderStyle: 'solid' };
    } else if (cardBorderClass.includes('#49bc45')) {
      customStyle = { borderColor: '#49bc45', borderWidth: '2px', borderStyle: 'solid' };
    } else if (cardBorderClass.includes('#fbc232')) {
      customStyle = { borderColor: '#fbc232', borderWidth: '2px', borderStyle: 'solid' };
    }

    return (
      <div
        key={teacher.id}
        className={`${cardBorderClass} rounded-sm bg-white p-5 shadow-2xs hover:shadow-md transition duration-200 flex flex-col sm:flex-row gap-5`}
        style={customStyle}
      >
      {/* Teacher Photo */}
      <div className="shrink-0 flex sm:flex-col items-center">
        <img
          src={teacher.photo}
          alt={teacher.name}
          className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl object-cover border border-gray-200 shadow-xs"
          loading="lazy"
        />
        {typeof teacher.rating === 'number' && teacher.rating > 0 && (
          <div className="ml-4 sm:ml-0 sm:mt-2.5 flex items-center gap-1 text-[#fbc232]">
            <Star className="w-3.5 h-3.5 fill-current" />
            <span className="text-xs font-bold text-gray-700">{teacher.rating}</span>
            {typeof teacher.reviewsCount === 'number' && (
              <span className="text-[10px] text-gray-400">({teacher.reviewsCount})</span>
            )}
          </div>
        )}
      </div>

      {/* Teacher Details */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-condensed text-lg font-bold text-[#2b5da6] leading-tight">
            {teacher.name}
          </h3>
          <p className="text-xs font-semibold text-gray-600 mt-0.5">
            {teacher.title}
          </p>

          {/* Badges / Specialties */}
          {(teacher.specialties.length > 0 || typeof teacher.experienceYears === 'number') && (
            <div className="flex flex-wrap gap-1.5 mt-2.5">
              {teacher.specialties.map((spec) => (
                <span
                  key={spec}
                  className="bg-blue-50 text-[#2b5da6] text-[10px] font-semibold px-2 py-0.5 rounded-full border border-blue-100"
                >
                  {spec}
                </span>
              ))}
              {typeof teacher.experienceYears === 'number' && (
                <span className="bg-emerald-50 text-[#69bc45] text-[10px] font-semibold px-2 py-0.5 rounded-full border border-emerald-100">
                  {teacher.experienceYears}+ Yrs Exp
                </span>
              )}
            </div>
          )}

          {/* Location */}
          <div className="flex items-center gap-1.5 text-gray-500 text-[11px] mt-3">
            <MapPin className="w-3.5 h-3.5 text-[#2b5da6] shrink-0" />
            <span>{teacher.address}</span>
          </div>
        </div>

        {/* Actions */}
        {(teacher.email || !teacher.hideBookingButton) && (
          <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between gap-3">
            {teacher.email ? (
              <span className="text-[11px] text-gray-500 truncate max-w-[150px] sm:max-w-none">
                {teacher.email}
              </span>
            ) : <span />}
            {!teacher.hideBookingButton && (
              <button
                type="button"
                onClick={onContactTeacher}
                className="bg-[#2b5da6] hover:bg-[#224d8b] text-white font-condensed text-xs uppercase font-bold px-3.5 py-1.5 rounded-xs transition cursor-pointer shadow-2xs shrink-0"
              >
                Book Session
              </button>
            )}
          </div>
        )}
      </div>
    </div>
    );
  };

  return (
    <div className="w-full bg-white flex flex-col font-sans">
      {/* Page Header Banner */}
      <section className="bg-gradient-to-r from-[#2b5da6] to-[#1f4882] text-white px-6 lg:px-12 py-10">
        <div className="max-w-3xl">
          <span className="text-xs uppercase font-condensed tracking-wider font-semibold text-blue-100 block mb-1">
            Certified Educators & Special Education Specialists
          </span>
          <h1 className="font-condensed text-3xl lg:text-5xl font-bold tracking-tight">
            MEET OUR TEACHERS
          </h1>
          <p className="mt-3 text-xs lg:text-sm text-blue-50 leading-relaxed max-w-xl">
            Our team of licensed professional teachers (LPT), special education (SPED) mentors, and educational diagnosticians work collaboratively with children, parents, and developmental specialists to achieve joyful and measurable growth.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="p-6 lg:p-10 space-y-10">
        {/* Why Our Teachers Excel */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            className="bg-[#2b5da6] text-white p-6 rounded-lg shadow-sm"
            style={{ backgroundColor: '#2b5da6' }}
          >
            <div className="w-10 h-10 rounded-full bg-white text-[#2b5da6] flex items-center justify-center mb-4 shadow-xs">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="font-condensed text-lg font-bold text-white uppercase mb-2">
              Licensed & SPED Trained
            </h3>
            <p className="text-xs text-blue-100 leading-relaxed">
              Every teacher is thoroughly vetted, licensed, and continuously trained in sensory integration, behavioral accommodation, and neurodiversity-affirming approaches.
            </p>
          </div>

          <div
            className="bg-[#69bc45] text-white p-6 rounded-lg shadow-sm"
            style={{ backgroundColor: '#69bc45' }}
          >
            <div className="w-10 h-10 rounded-full bg-white text-[#69bc45] flex items-center justify-center mb-4 shadow-xs">
              <GraduationCap className="w-5 h-5" />
            </div>
            <h3 className="font-condensed text-lg font-bold text-white uppercase mb-2">
              Tailored Teaching Plans
            </h3>
            <p className="text-xs text-emerald-50 leading-relaxed">
              Our educators do not use one-size-fits-all curricula. Every instructional plan is customized to each learner's unique processing pace, strengths, and goals.
            </p>
          </div>

          <div
            className="bg-[#fbc232] text-gray-900 p-6 rounded-lg shadow-sm"
            style={{ backgroundColor: '#fbc232' }}
          >
            <div className="w-10 h-10 rounded-full bg-white text-[#aa7800] flex items-center justify-center mb-4 shadow-xs">
              <CheckCircle className="w-5 h-5" />
            </div>
            <h3 className="font-condensed text-lg font-bold text-gray-900 uppercase mb-2">
              Transparent Progress
            </h3>
            <p className="text-xs text-amber-950 leading-relaxed font-medium">
              Teachers provide weekly debriefs and periodic developmental reports, giving parents peace of mind and actionable strategies for home practice.
            </p>
          </div>
        </section>

        {/* Founders & Leadership Section */}
        <section className="bg-gradient-to-br from-white via-blue-50/20 to-white border border-gray-200/80 rounded-sm p-6 lg:p-10 shadow-2xs">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.6fr_1fr] lg:grid-cols-[1fr_1.8fr_1fr] items-center gap-6 lg:gap-10 max-w-6xl mx-auto">
            {/* Left side: Josh Henry II Senina, LPT */}
            <div className="text-center flex flex-col items-center justify-center order-2 md:order-1">
              <h3 className="font-condensed text-base lg:text-lg font-bold text-[#2b5da6] uppercase leading-snug">
                Josh Henry II Senina, LPT
              </h3>
              <p className="text-sm font-bold text-[#69bc45] uppercase tracking-wider mt-1">
                Founder
              </p>
              <div className="mt-3 text-xs text-gray-600 space-y-1">
                <p className="font-medium">Bachelor of Special Education</p>
                <p>Central Philippine University</p>
                <p className="font-semibold text-gray-500">Batch 2017</p>
              </div>
            </div>

            {/* Center: Image */}
            <div className="flex justify-center items-center order-1 md:order-2">
              <img
                src="/assets/aistudio/Untitled_design__1__fa8a2d93.png"
                alt="Josh Henry II Senina, LPT and Dinah Rose Carillo - Senina, LPT"
                className="w-[5in] h-[5in] max-w-full object-contain drop-shadow-md"
              />
            </div>

            {/* Right side: Dinah Rose Carillo - Senina, LPT */}
            <div className="text-center flex flex-col items-center justify-center order-3 md:order-3">
              <h3 className="font-condensed text-base lg:text-lg font-bold text-[#2b5da6] uppercase leading-snug">
                Dinah Rose Carillo - Senina, LPT
              </h3>
              <p className="text-sm font-bold text-[#69bc45] uppercase tracking-wider mt-1">
                Chief Operations Officer
              </p>
              <div className="mt-3 text-xs text-gray-600 space-y-1">
                <p className="font-medium">Bachelor of Special Education</p>
                <p>Central Philippine University</p>
                <p className="font-semibold text-gray-500">Batch 2017</p>
              </div>
            </div>
          </div>
        </section>

        {/* Faculty & Staff */}
        <section className="space-y-6">
          <div>
            <h2
              className="font-condensed text-2xl lg:text-3xl font-bold text-[#fbc232] uppercase tracking-tight"
              style={{ color: '#fbc232' }}
            >
              Faculty & Staff
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredTeachers.map((teacher) => renderTeacherCard(teacher, 'border-2 border-[#fbc232]'))}
          </div>
        </section>

        {/* Upper Part: MYTUTOR TEACHERS (2 columns x 2 rows grid) */}
        <section className="space-y-6">
          <div>
            <h2 className="font-condensed text-2xl lg:text-3xl font-bold text-[#2b5da6] uppercase tracking-tight">
              MYTUTOR TEACHERS
            </h2>
            <p className="text-xs text-gray-500 mt-1">
              Our dedicated faculty and educational mentors providing individualized SPED and academic guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {myTutorTeachers.map((teacher) => renderTeacherCard(teacher, 'border-2 border-[#2b5da6]'))}
          </div>
        </section>

        {/* Lower Part: The GiftEd Teachers */}
        <section className="space-y-6 pt-4 border-t border-gray-100">
          <div>
            <h2
              className="font-condensed text-2xl lg:text-3xl font-bold text-[#69bc45] uppercase tracking-tight"
              style={{ color: '#69bc45' }}
            >
              The GiftEd Teachers
            </h2>
            <p className="text-xs text-gray-500 mt-1">
              Certified progressive educators and early childhood mentors from our partner, The GiftEd.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {giftedTeachers.map((teacher) => renderTeacherCard(teacher, 'border-2 border-[#49bc45]'))}
          </div>
        </section>
      </div>
    </div>
  );
};
