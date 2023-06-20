import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="container">
      <div className="footer_block">
        <div className="footer_content">
          <div className="footer_logo">
            <img
              src="https://store.akamai.steamstatic.com/public/images/footerLogo_valve_new.png"
              alt=""
              className="footer_logo1"
            />

            <img
              src="https://store.akamai.steamstatic.com/public/images/v6/logo_steam_footer.png"
              alt=""
              className="footer_logo2"
            />
          </div>
          <div className="footer_text_block">
            <p className="footer_text">
              © 2023 Valve Corporation. Все права защищены. Все торговые марки
              являются собственностью соответствующих владельцев в США и других
              странах. НДС включён во все цены, где он применим.{" "}
              <span className="footer_text-info">
                Политика конфиденциальности | Правовая информация | Соглашение
                подписчика Steam | Возвраты | Файлы cookie
              </span>
            </p>
          </div>
          <div className="footer_links">
            <a href="https://www.valvesoftware.com/ru/about">О Valve | </a>
            <a href="https://www.valvesoftware.com/ru/">Вакансии | </a>
            <a href="https://partner.steamgames.com/">Steamworks | </a>
            <a href="https://partner.steamgames.com/steamdirect">
              Дистрибуция Steam |
            </a>
            <a href="https://help.steampowered.com/ru/?snr=1_44_44_">
              Служба поддержки |
            </a>
            <a href="https://store.steampowered.com/digitalgiftcards/">
              Подарочные карты |
            </a>
            <a href="https://www.facebook.com/Steam">Steam | </a>
            <a href="https://twitter.com/steam">@steam </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
