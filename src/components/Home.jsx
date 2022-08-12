import logo from '../image/wave.svg';

export function Home() {
  return (
    <div className='header'>
      <div className='inner-header flex'>
        <div className='homeContainer shadow'>
          <div className='paragraph'>
            <h1 className='title'>The easy way to collect addresses.</h1>
            <h2 className='subParagraph'>
              The best professional tool to help you collect the addresses from
              friends and family.
            </h2>
            <h2 className='registerText'>Register now your free account!</h2>
          </div>
        </div>
      </div>
      <div>
        <img src={logo} className='waves' alt='logo' />
      </div>
    </div>
  );
}
