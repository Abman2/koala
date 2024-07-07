import React from 'react';
import cardBuy from '../../assets/speciality asset/card-buy.png';
import cardExtension from '../../assets/speciality asset/card-extensions.png';
import cardSendRecieve from '../../assets/speciality asset/card-send-receive.png';
import cardSwap from '../../assets/speciality asset/card-swap.png';
import cardTranslations from '../../assets/speciality asset/card-translations.png';
import cardWalletConnect from '../../assets/speciality asset/card-walletconnect.png';
import nft from '../../assets/speciality asset/nft.png';
import phone from '../../assets/speciality asset/phone.png';

export const Speciality = () => {
     return (
          <section className='grid md:grid-cols-2 place-items-center sm:max-w-lg md:max-w-4xl lg:max-w-6xl mx-auto gap-12 p-2 max-w-md overflow-hidden '>
               <aside className='flex flex-col bg-gradient-to-r from-purple-800 via-indigo-900 to-indigo-950  rounded-3xl md:h-[580px] overflow-hidden  '>
                    <div className='text-center space-y-4 md md:px-20  px-4:px-4 py-10 '>
                         <h1 className='text-white text-3xl font-bold'>Private & Secure</h1>
                         <p className='text-slate-300 text-[17px] font-semibold'>
                              Your Koala Wallet is non-custodial, this means you and only you have access to your funds and private keys.
                         </p>
                    </div>
                    <div className=' px-10'>
                         <img src={phone} alt='' />
                    </div>
               </aside>
               <aside className='flex flex-col bg-gradient-to-r from-purple-800 via-indigo-900 to-indigo-950  rounded-3xl md:h-[580px] overflow-hidden w-full'>
                    <div className='text-center space-y-4 md:px-20  px-4 py-10 '>
                         <h1 className='text-white text-3xl font-bold'>NFTs</h1>
                         <p className='text-slate-300 text-[17px] font-semibold'>
                              Share, store, and manage your precious crypto collectibles in our NFT Jungle.{' '}
                         </p>
                    </div>
                    <div className='px-12 mx-auto'>
                         <img src={nft} alt='' className='h-64' />
                    </div>
               </aside>
               <aside className='flex flex-col bg-gradient-to-r from-purple-800 via-indigo-900 to-indigo-950  rounded-3xl md:h-[580px] overflow-hidden '>
                    <div className='text-center  space-y-4 md:px-20  px-4 py-10 '>
                         <h1 className='text-white text-3xl font-bold'>Send & Receive</h1>
                         <p className='text-slate-300 text-[17px] font-semibold'>
                              Koala Wallet makes it safe and easy to send and receive crypto to your wallet address.{' '}
                         </p>
                    </div>
                    <div className='px-10 md:pt-10'>
                         <img src={cardSendRecieve} alt='' />
                    </div>
               </aside>
               <aside className='flex flex-col bg-gradient-to-r from-purple-800 via-indigo-900 to-indigo-950  rounded-3xl md:h-[580px] overflow-hidden'>
                    <div className='text-center space-y-4 md:px-20  px-4 py-10 '>
                         <h1 className='text-white text-3xl font-bold'>Swap in Seconds</h1>
                         <p className='text-slate-300 text-[17px] font-semibold'>Swap between all your favorite crypto assets and more! </p>
                    </div>
                    <div className='px-12 mx-auto pt-10'>
                         <img src={cardSwap} alt='' className='md:h-72' />
                    </div>
               </aside>
               <aside className='flex flex-col bg-gradient-to-r from-purple-800 via-indigo-900 to-indigo-950  rounded-3xl md:h-[580px] overflow-hidden '>
                    <div className='text-center space-y-4 md:px-20  px-4 py-10 '>
                         <h1 className='text-white text-3xl font-bold'>WalletConnect V2</h1>
                         <p className='text-slate-300 text-[17px] font-semibold px-1'>
                              Explore and interact with your favorite blockchain dApps securely while connected to your Koala Wallet.{' '}
                         </p>
                    </div>
                    <div className=' px-10 mx-auto'>
                         <img src={cardWalletConnect} alt='' className=' md:h-[373px] h-88' />
                    </div>
               </aside>
               <aside className='flex flex-col bg-gradient-to-r from-purple-800 via-indigo-900 to-indigo-950  rounded-3xl md:h-[580px] overflow-hidden '>
                    <div className='text-center space-y-4 md:px-20  px-4 py-10 '>
                         <h1 className='text-white text-3xl font-bold '>Buy Crypto</h1>
                         <p className='text-slate-300 text-[17px] font-semibold px-1'>
                              With Koala Wallet, purchasing crypto has never been easier. Stock up on your favorite coins and tokens
                              directly in-app!{' '}
                         </p>
                    </div>
                    <div className='px-12 pt-5 mx-auto'>
                         <img src={cardBuy} alt='' className='h-' />
                    </div>
               </aside>
               <aside className='flex flex-col bg-gradient-to-r from-purple-800 via-indigo-900 to-indigo-950  rounded-3xl md:h-[580px] overflow-hidden'>
                    <div className='text-center space-y-4 md:px-20  px-2 py-10 '>
                         <h1 className='text-white text-3xl font-bold'>Browser Extension</h1>
                         <p className='text-slate-300 text-[17px] font-semibold px-5'>
                              From browser extension to mobile, Koala Wallet provides a seamless cross-platform crypto wallet experience for
                              your on-chain activities.{' '}
                         </p>
                    </div>
                    <div className=' -ms-0 mx-auto'>
                         <img src={cardExtension} alt='' className=' lg:h-[373px] h-72 w-11/12 ' />
                    </div>
               </aside>
               <aside className='flex flex-col bg-gradient-to-r from-purple-800 via-indigo-900 to-indigo-950  rounded-3xl md:h-[580px] overflow-hidden '>
                    <div className='text-center space-y-4 md:px-20  px-4 py-10 '>
                         <h1 className='text-white text-3xl font-bold '>Hello, Hola, Bonjour!</h1>
                         <p className='text-slate-300 text-[17px] font-semibold px-5'>
                              Koala Wallet is supported in over 15+ languages and users can also enjoy asset balance display in their local
                              currency.
                         </p>
                    </div>
                    <div className='px-12 pt-5 mx-auto'>
                         <img src={cardTranslations} alt='' className='h-' />
                    </div>
               </aside>
          </section>
     );
};
