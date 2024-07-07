import React from 'react';
import securityAudit from '../assets/Security/security-audit1.svg';
import keys from '../assets/Security/your-keys.svg';
import privacy from '../assets/Security/your-privacy.svg';
import isecure from '../assets/Security/increased-security.svg';
import protect from '../assets/Security/protect-your-assets.svg';
import bbounty from '../assets/Security/bug-bounty.svg';
import keyboard from '../assets/Security/secure-keyboard.svg';
import worldClass from '../assets/Security/world-class.svg';
export const SecurityComponent = () => {
     return (
          <main className='text-white mx-auto lg:max-w-5xl max-w-md  '>
               <section className='text-center my-20 lg:mt-40 space-y-7'>
                    <h1 className='text-5xl font-black'>Security</h1>
                    <p className='font-semibold text-xl lg:text-2xl px-3 tracking-wide lg:px-52 '>
                         Take control of your crypto asset security and experience true financial freedom with Koala Wallet
                    </p>
               </section>
               <section>
                    <article className='bg-indigo-800  rounded-3xl  px-6 lg:px-10  text-white flex pt-10 items-center relative md:min-h-[268px] overflow-hidden'>
                         <div className=' lg:w-7/12 mb-8'>
                              <h3 className='text-xl font-bold mb-3  '>Security Audit</h3>
                              <p className='text-[17px] leading-[24px] text-slate-300'>
                                   Both Koala Wallet mobile and browser extension, have been extensively and repeatedly audited by Re4Sec.
                                   They have found zero critical, high, or even medium security issues. All suggestions have been addressed
                                   in the latest version of the app by our stellar developer team.
                              </p>
                         </div>
                         <div className=' '>
                              <img src={securityAudit} alt='' className='absolute bottom-0 right-[-60px] max-w-[674px] sm:right-[-20px]' />
                         </div>
                    </article>
                    <article className='grid gap-9 lg:grid-cols-2 my-9 '>
                         <aside className='bg-indigo-800  rounded-3xl overflow-hidden px-6 lg:px-10 py-10  text-white relative md:min-h-[240px]'>
                              <div className='lg:w-9/12'>
                                   <h1 className='text-xl font-bold mb-3'>Your Keys, Your Coins</h1>
                                   <p className='text-[17px] leading-[24px] text-slate-200'>
                                        Your Koala Wallet is non-custodial, this means you and only you have access to your funds and
                                        private keys.
                                   </p>
                              </div>
                              <div>
                                   <img src={keys} alt='' className='absolute right-0 top-0 max-w-xs' />
                              </div>
                         </aside>
                         <aside className='bg-indigo-800  rounded-3xl overflow-hidden px-6 lg:px-10 py-10   text-white relative md:min-h-[240px]'>
                              <div className='lg:w-9/12'>
                                   <h1 className='text-xl font-bold mb-3'>Your Privacy is Our Priority</h1>
                                   <p className='text-[17px] leading-[24px] text-slate-200 mb-2'>
                                        Your Koala Wallet never stores or tracks your personal information, account addresses or asset
                                        balances.
                                   </p>
                                   <a href='' className='font-semibold'>
                                        Go to Privacy Policy
                                   </a>
                              </div>
                              <div>
                                   <img src={privacy} alt='' className='absolute right-0 top-0 max-w-xs' />
                              </div>
                         </aside>
                         <aside className='bg-indigo-800  rounded-3xl overflow-hidden px-6 lg:px-10 py-10  text-white relative md:min-h-[240px]'>
                              <div className='lg:w-9/12'>
                                   <h1 className='text-xl font-bold mb-3'>Increased Security Measures</h1>
                                   <p className='text-[17px] leading-[24px] text-slate-200'>
                                        Koala Wallet has prevented screenshots on sensitive screens such as those which show your phrase or
                                        require password entry.
                                   </p>
                              </div>
                              <div>
                                   <img src={isecure} alt='' className='absolute right-0 top-0 max-w-xs' />
                              </div>
                         </aside>
                         <aside className='bg-indigo-800  rounded-3xl overflow-hidden px-6 lg:px-10 py-10  text-white relative md:min-h-[240px]'>
                              <div className='lg:w-9/12'>
                                   <h1 className='text-xl font-bold mb-3'>Protect Your Assets</h1>
                                   <p className='text-[17px] leading-[24px] text-slate-200'>
                                        Your coins are protected with biometrics and a pin every time you access your wallet.
                                   </p>
                              </div>
                              <div>
                                   <img src={protect} alt='' className='absolute right-0 top-0 max-w-xs' />
                              </div>
                         </aside>
                         <aside className='bg-indigo-800  rounded-3xl overflow-hidden px-6 lg:px-10 py-10  text-white relative md:min-h-[240px]'>
                              <div className='lg:w-9/12'>
                                   <h1 className='text-xl font-bold mb-3'>Secure Keyboard Input</h1>
                                   <p className='text-[17px] leading-[24px] text-slate-200'>
                                        We built our own secure keyboard with the ability of randomizing keys, offering users the ultimate
                                        level of protection.
                                   </p>
                              </div>
                              <div>
                                   <img src={keyboard} alt='' className='absolute right-0 top-16 max-w-xs' />
                              </div>
                         </aside>
                         <aside className='bg-indigo-800  rounded-3xl overflow-hidden px-6 lg:px-10 py-10  text-white relative md:min-h-[240px]'>
                              <div className='lg:w-9/12'>
                                   <h1 className='text-xl font-bold mb-3'>World Class Support</h1>
                                   <p className='text-[17px] leading-[24px] text-slate-200 mb-2'>
                                        Our support team is built with passionate and knowledgable consultants. Available to help 24 hours a
                                        day, 7 days a week.
                                   </p>
                                   <a href='' className='font-semibold'>
                                        Go to Privacy Policy
                                   </a>
                              </div>
                              <div>
                                   <img src={worldClass} alt='' className='absolute right-0 top-0 max-w-xs' />
                              </div>
                         </aside>
                    </article>
                    <article className=' bg-purple-900 text-center rounded-3xl  px-6 lg:px-10  text-white flex pt-10 items-center relative md:min-h-[268px] overflow-hidden'>
                         <div className='lg:w-8/12 mx-auto  mb-8'>
                              <h3 className='text-xl font-bold mb-3  r'>Bug Bounty Program</h3>
                              <p className='text-[17px] leading-[26px] text-justify md:text-center text-slate-200'>
                                   Your security is Koala Wallet's top priority. We strive to provide a highly secure wallet, continually
                                   improved by our Bug Bounty Program, which works closely with a community of security researchers.{' '}
                              </p>
                              <button className='p-3  px-4 bg-black mt-4 rounded-full font-bold'>Explore Our Bug Bounty Program</button>
                         </div>
                         <div className=' '>
                              <img src={bbounty} alt='' className='absolute bottom-0 right-[-60px] max-w-[674px] sm:right-[-20px]' />
                         </div>
                    </article>
               </section>
          </main>
     );
};
