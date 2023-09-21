import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
    <div className="headerbackground">
      <nav className='navbar'>
        <div className="logo">
          <svg xmlns="http://www.w3.org/2000/svg"   fill="none">
            <path d="M23.9009 0.650683L19.2209 17.4027H15.2609L12.1169 5.47468L8.82886 17.4027L4.89286 17.4267L0.380859 0.650683C0.380859 0.650683 2.61642 0.311807 3.98086 0.650683C9.03638 1.90629 1.7266 13.4864 6.93286 13.6587C12.1814 13.8323 5.24816 1.93192 10.3409 0.650683C11.7588 0.293953 12.6682 0.289031 14.0849 0.650683C19.1287 1.93827 12.0961 13.678 17.3009 13.5867C22.4838 13.4957 15.2487 1.91134 20.2769 0.650683C21.6496 0.306501 23.9009 0.650683 23.9009 0.650683Z" fill="white"/>
            <path d="M24.7508 10.7067C24.7508 9.36268 25.0148 8.17068 25.5428 7.13068C26.0868 6.09068 26.8148 5.29068 27.7268 4.73068C28.6548 4.17068 29.6868 3.89068 30.8228 3.89068C31.8148 3.89068 32.6788 4.09068 33.4148 4.49068C34.1668 4.89068 34.7668 5.39468 35.2148 6.00268C35.2148 6.00268 34.8529 4.75264 35.2148 4.10668C35.8608 2.95378 38.5988 4.10668 38.5988 4.10668V17.4027H35.2148V15.4587C34.7828 16.0827 34.1828 16.6027 33.4148 17.0187C32.6628 17.4187 31.7908 17.6187 30.7988 17.6187C29.6788 17.6187 28.6548 17.3307 27.7268 16.7547C26.8148 16.1787 26.0868 15.3707 25.5428 14.3307C25.0148 13.2747 24.7508 12.0667 24.7508 10.7067ZM35.2148 10.7547C35.2148 10.7547 35.0548 9.24268 34.7348 8.66668C34.4148 8.07468 33.9828 7.62668 33.4388 7.32268C32.8948 7.00268 32.3108 6.84268 31.6868 6.84268C31.0628 6.84268 30.4868 6.99468 29.9588 7.29868C29.4308 7.60268 28.9988 8.05068 28.6628 8.64268C28.3428 9.21868 28.1828 10.7067 28.1828 10.7067C28.1828 10.7067 28.3428 12.2107 28.6628 12.8187C28.9988 13.4107 29.4308 13.8667 29.9588 14.1867C30.5028 14.5067 31.0788 14.6667 31.6868 14.6667C32.3108 14.6667 32.8948 14.5147 33.4388 14.2107C33.9828 13.8907 34.4148 13.4427 34.7348 12.8667C35.0548 12.2747 35.2148 10.7547 35.2148 10.7547Z" fill="white"/>
            <path d="M46.9444 14.3067C51.1383 14.3067 46.2726 5.2615 50.3044 4.10668C51.647 3.72214 53.8804 4.10668 53.8804 4.10668L48.9604 17.4027H44.8804L39.9844 4.10668C39.9844 4.10668 42.2335 3.71739 43.5844 4.10668C47.6143 5.26798 42.7505 14.3067 46.9444 14.3067Z" fill="white"/>
            <path d="M67.6476 10.4667C67.6476 10.9467 67.6156 11.3787 67.5516 11.7627C67.4876 12.1467 57.7516 10.8027 57.8316 11.7627C57.9116 12.7227 58.2476 13.4747 58.8396 14.0187C59.4316 14.5627 60.1596 14.8347 61.0236 14.8347C62.2716 14.8347 63.1596 14.2987 63.6876 13.2267C64.2156 12.1547 67.3116 13.2267 67.3116 13.2267C66.9276 14.5067 66.1916 15.5627 65.1036 16.3947C64.0156 17.2107 62.6796 17.6187 61.0956 17.6187C59.8156 17.6187 58.6636 17.3387 57.6396 16.7787C56.6316 16.2027 55.8396 15.3947 55.2636 14.3547C54.7036 13.3147 54.4236 12.1147 54.4236 10.7547C54.4236 9.37868 54.7036 8.17068 55.2636 7.13068C55.8236 6.09068 56.6076 5.29068 57.6156 4.73068C58.6236 4.17068 59.7836 3.89068 61.0956 3.89068C62.3596 3.89068 63.4876 4.16268 64.4796 4.70668C65.4876 5.25068 66.2636 6.02668 66.8076 7.03468C67.3676 8.02668 67.6476 9.17068 67.6476 10.4667ZM64.1676 9.50668C64.1516 8.64268 63.8396 7.95468 63.2316 7.44268C62.6236 6.91468 61.8796 6.65068 60.9996 6.65068C60.1676 6.65068 59.4636 6.90668 58.8876 7.41868C58.3276 7.91468 57.9836 8.61068 57.8556 9.50668C57.8556 9.50668 64.1836 10.3707 64.1676 9.50668Z" fill="white"/>
            <path d="M74.7081 17.6187C73.6201 17.6187 72.6441 17.4267 71.7801 17.0427C70.9161 16.6427 70.2281 16.1067 69.7161 15.4347C69.2201 14.7627 68.9481 14.0187 68.9001 13.2027C68.8521 12.3867 72.2201 12.6907 72.2841 13.2027C72.3481 13.7147 72.5961 14.1387 73.0281 14.4747C73.4761 14.8107 74.6841 14.9787 74.6841 14.9787C74.6841 14.9787 75.8201 14.8507 76.1721 14.5947C76.5401 14.3387 76.7241 14.0107 76.7241 13.6107C76.7241 13.1787 76.0521 12.6507 76.0521 12.6507L73.9641 11.9307C73.9641 11.9307 72.1561 11.4427 71.5161 11.1867C70.8921 10.9307 70.3481 10.5387 69.8841 10.0107C69.4361 9.48268 69.2121 8.77068 69.2121 7.87468C69.2121 7.13868 69.4201 6.46668 69.8361 5.85868C70.2681 5.25068 70.8761 4.77068 71.6601 4.41868C72.4601 4.06668 73.3961 3.89068 74.4681 3.89068C76.0521 3.89068 77.3161 4.29068 78.2601 5.09068C79.2041 5.87468 79.7241 6.93868 79.8201 8.28268C79.9161 9.62668 76.6521 8.81068 76.6041 8.28268C76.5561 7.75468 76.3321 7.33868 75.9321 7.03468C75.5481 6.71468 74.3721 6.55468 74.3721 6.55468C74.3721 6.55468 73.2921 6.66668 72.9561 6.89068C72.6361 7.11468 72.4761 7.42668 72.4761 7.82668C72.4761 8.27468 72.7001 8.61868 73.1481 8.85868C73.5961 9.08268 75.2361 9.55468 75.2361 9.55468C75.2361 9.55468 76.9881 10.0427 77.6121 10.2987C78.2361 10.5547 78.7721 10.9547 79.2201 11.4987C79.6841 12.0267 79.9241 12.7307 79.9401 13.6107C79.9401 14.3787 79.7241 15.0667 79.2921 15.6747C78.8761 16.2827 78.2681 16.7627 77.4681 17.1147C76.6841 17.4507 75.7641 17.6187 74.7081 17.6187Z" fill="white"/>
            <path d="M81.4022 9.00268C81.4022 7.22505 81.7702 5.88268 82.5062 4.58668C83.2582 3.27468 84.2742 2.25868 85.5542 1.53868C86.8502 0.802683 88.2982 0.434682 89.8982 0.434682C91.7702 0.434682 93.4102 0.914683 94.8182 1.87468C96.2262 2.83468 97.2102 4.16268 97.7702 5.85868C98.3302 7.55468 94.2902 6.65868 93.9062 5.85868C93.5222 5.05868 92.9782 4.45868 92.2742 4.05868C91.5862 3.65868 90.7862 3.45868 89.8742 3.45868C88.8982 3.45868 88.0262 3.69068 87.2582 4.15468C86.5062 4.60268 85.9142 5.24268 85.4822 6.07468C85.0662 6.90668 84.8582 9.00268 84.8582 9.00268C84.8582 9.00268 85.0662 11.0827 85.4822 11.9307C85.9142 12.7627 86.5062 13.4107 87.2582 13.8747C88.0262 14.3227 88.8982 14.5467 89.8742 14.5467C90.7862 14.5467 91.5862 14.3467 92.2742 13.9467C92.9782 13.5307 93.5222 12.9227 93.9062 12.1227C94.2902 11.3227 98.3302 10.4107 97.7702 12.1227C97.2102 13.8347 96.2262 15.1707 94.8182 16.1307C93.4262 17.0747 91.7862 17.5467 89.8982 17.5467C88.2982 17.5467 86.8502 17.1867 85.5542 16.4667C84.2742 15.7307 83.2582 14.7147 82.5062 13.4187C81.7702 12.1227 81.4022 10.7803 81.4022 9.00268Z" fill="white"/>
            <path d="M106.064 17.6187C104.784 17.6187 103.632 17.3387 102.608 16.7787C101.584 16.2027 100.776 15.3947 100.184 14.3547C99.6081 13.3147 99.3201 12.1147 99.3201 10.7547C99.3201 9.39468 99.6161 8.19468 100.208 7.15468C100.816 6.11468 101.64 5.31468 102.68 4.75468C103.72 4.17868 104.88 3.89068 106.16 3.89068C107.44 3.89068 108.6 4.17868 109.64 4.75468C110.68 5.31468 111.496 6.11468 112.088 7.15468C112.696 8.19468 113 9.39468 113 10.7547C113 12.1147 112.688 13.3147 112.064 14.3547C111.456 15.3947 110.624 16.2027 109.568 16.7787C108.528 17.3387 107.36 17.6187 106.064 17.6187ZM106.064 14.6907C106.064 14.6907 107.24 14.5467 107.768 14.2587C108.312 13.9547 108.744 13.5067 109.064 12.9147C109.384 12.3227 109.544 10.7547 109.544 10.7547C109.544 10.7547 109.208 8.52268 108.536 7.85068C107.88 7.16268 106.112 6.81868 106.112 6.81868C106.112 6.81868 104.344 7.16268 103.688 7.85068C103.048 8.52268 102.728 10.7547 102.728 10.7547C102.728 10.7547 103.04 12.9947 103.664 13.6827C104.304 14.3547 106.064 14.6907 106.064 14.6907Z" fill="white"/>
          </svg>
        </div>
        <ul className="menu">
            <li>home</li>
            <li>best</li>

            <li>category</li>

        </ul>
        <button>
            Login
        </button>
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
          <rect x="12" y="16" width="24" height="1.92" rx="0.96" fill="#EEEEEE"/>
          <rect x="12" y="23.04" width="24" height="1.92" rx="0.96" fill="#EEEEEE"/>
          <rect x="12" y="30.08" width="24" height="1.92" rx="0.96" fill="#EEEEEE"/>
        </svg>

      </nav>
      <div className="header">
        <div className='heder-title'>
          <h1 className='download'>
            Free download sound effects without copyright
          </h1>
          <p className='parag-download'>
            download free copyright sound effect for yout Yourube video and any use</p>
        </div>
          <div className='labeled-input'>
            <input className='search' type="text" placeholder='Search sound effects' />
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <g clip-path="url(#clip0_208_15)">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M14.435 7.34313C16.3877 9.29575 16.3877 12.4616 14.435 14.4142C12.4824 16.3668 9.31658 16.3668 7.36396 14.4142C5.41134 12.4616 5.41134 9.29575 7.36396 7.34313C9.31658 5.39051 12.4824 5.39051 14.435 7.34313ZM16.5062 15.0712C18.5618 12.3294 18.3428 8.42251 15.8492 5.92891C13.1156 3.19524 8.68342 3.19524 5.94975 5.92891C3.21608 8.66258 3.21608 13.0947 5.94975 15.8284C8.44334 18.322 12.3502 18.541 15.092 16.4854L18.6777 20.0711C19.0682 20.4616 19.7014 20.4616 20.0919 20.0711C20.4824 19.6805 20.4824 19.0474 20.0919 18.6568L16.5062 15.0712Z" fill="#4F5261"/>
                </g>
                <defs>
                  <clipPath id="clip0_208_15">
                    <rect width="24" height="24" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
            <label htmlFor="" className="search">
            
            Try keyword: happy, funny , natural ,horror,jump and more
            </label>

        </div>
        <div className='link'>
          <p>650.654 Availible Sounds. Library UPDATED WEEKLY. <small>  <a href="#">See popular more</a></small></p>

        </div>
        
      </div>
    </div>
    </>
  )
}

export default App
