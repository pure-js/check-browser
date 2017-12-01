import {detectBrowser,
  browserIsDeprecated} from '../src/browser-detection';

describe('Should correctly detect', () => {
  test('Chrome', () => {
    const chrome = {
      userAgent: `Mozilla/5.0 (Windows NT 10.0; Win64; x64) 
        AppleWebKit/537.36 (KHTML, like Gecko) 
        Chrome/62.0.3202.94 Safari/537.36`,
    };

    expect(detectBrowser(chrome)).toEqual({
      name: 'Chrome',
      version: 62,
    });
  });

  test('Safari', () => {
    const safari = {
      userAgent: `Mozilla/5.0 (Macintosh; 
        Intel Mac OS X 10_13_1) AppleWebKit/604.3.5 (KHTML, like Gecko) 
        Version/11.0.1 Safari/604.3.5`,
    };

    expect(detectBrowser(safari)).toEqual({
      name: 'Safari',
      version: 11,
    });
  });

  test('UC Browser', () => {
    const ucBrowser = {
      userAgent: `UCWEB/2.0 (Java; U; MIDP-2.0; Nokia203/20.37)
        U2/1.0.0 UCBrowser/8.7.0.218 U2/1.0.0 Mobile`,
    };

    expect(detectBrowser(ucBrowser)).toEqual({
      name: 'Uc Browser',
      version: 11,
    });
  });

  test('Firefox', () => {
    const firefox = {
      userAgent: `Mozilla/5.0 
        (Windows NT 10.0; Win64; x64; rv:57.0) 
        Gecko/20100101 Firefox/57.0`,
    };

    expect(detectBrowser(firefox)).toEqual({
      name: 'Firefox',
      version: 57,
    });
  });

  test('Internet Explorer', () => {
    const ie = {
      userAgent: `Mozilla/5.0 (Windows NT 10.0; WOW64; 
        Trident/7.0; .NET4.0C; .NET4.0E; .NET CLR 2.0.50727; 
        .NET CLR 3.0.30729; .NET CLR 3.5.30729; rv:11.0) like Gecko`,
    };

    expect(detectBrowser(ie)).toEqual({
      name: 'IE',
      version: 11,
    });
  });

  test('Opera', () => {
    const opera = {
      userAgent: `Mozilla/5.0 (Windows NT 10.0; Win64; x64) 
        AppleWebKit/537.36 (KHTML, like Gecko) 
        Chrome/62.0.3202.89 Safari/537.36 OPR/49.0.2725.39`,
    };

    expect(detectBrowser(opera)).toEqual({
      name: 'Opera',
      version: 49,
    });
  });

  test('Samsung Internet', () => {
    const samsung = {
      userAgent: `Mozilla/5.0 (Linux; Android 5.1.1; 
        SAMSUNG SM-G360T1 Build/LMY47X)
        AppleWebKit/537.36 (KHTML, like Gecko)
        SamsungBrowser/3.3 Chrome/38.0.2125.102 Mobile Safari/537.36`,
    };

    expect(detectBrowser(samsung)).toEqual({
      name: 'Opera',
      version: 3.3,
    });
  });

  test('Android', () => {
    const android = {
      userAgent: `Mozilla/5.0 (Linux; U; Android 4.0.4;
       pt-br; MZ608 Build/7.7.1-141-7-FLEM-UMTS-LA) 
       AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Safari/534.30`,
    };

    expect(detectBrowser(android)).toEqual({
      name: 'Opera',
      version: 3.3,
    });
  });

  test('Edge', () => {
    const edge = {
      userAgent: `Mozilla/5.0 (Windows NT 10.0; Win64; x64) 
        AppleWebKit/537.36 (KHTML, like Gecko) 
        Chrome/52.0.2743.116 Safari/537.36 Edge/15.15063`,
    };

    expect(detectBrowser(edge)).toEqual({
      name: 'Edge',
      version: 15,
    });
  });
});

describe('Should work correctly', () => {
  test('If can not find a version', () => {
    const ieWithoutVersion = {
      userAgent: `Mozilla/5.0 (Windows NT 10.0; WOW64; 
        Trident/7.0; .NET4.0C; .NET4.0E; .NET CLR 2.0.50727; 
        .NET CLR 3.0.30729; .NET CLR 3.5.30729) like Gecko`,
    };

    expect(detectBrowser(ieWithoutVersion)).toEqual({
      name: 'IE',
      version: null,
    });
  });

  test('if user agent is invalid', () => {
    const emptyUserAgent = {
      userAgent: '',
    };

    expect(detectBrowser(emptyUserAgent)).toEqual({
      name: undefined,
      version: NaN,
    });
  });
});

test('Should be able to detect deprecated browser', () => {
  const supportedBrowsers = {
    Firefox: 27,
    Chrome: 60,
    Opera: 15,
    IE: 11,
  };

  let browser = {
    Firefox: 25,
  };

  expect(browserIsDeprecated(browser, supportedBrowsers)).toEqual(true);

  browser = {
    Chrome: 12,
  };

  expect(browserIsDeprecated(browser, supportedBrowsers)).toEqual(true);

  browser = {
    Chrome: 63,
  };

  expect(browserIsDeprecated(browser, supportedBrowsers)).toEqual(false);

  browser = {
    IE: 9,
  };

  expect(browserIsDeprecated(browser, supportedBrowsers)).toEqual(true);

  browser = {
    Opera: 49,
  };

  expect(browserIsDeprecated(browser, supportedBrowsers)).toEqual(false);

  expect(browserIsDeprecated(browser)).toEqual(false);

  browser = {
    Bear: 1,
  };

  expect(browserIsDeprecated(browser, supportedBrowsers)).toEqual(false);
});
