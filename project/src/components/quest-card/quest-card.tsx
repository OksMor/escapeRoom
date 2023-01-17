function QuestCard(): JSX.Element {
  return (
    <div className="quest-card">
      <div className="quest-card__img">
        {/* <picture>
          <source type="image/webp" srcset="img/content/mars/mars-size-s.webp, img/content/mars/mars-size-s@2x.webp 2x"><img src="img/content/mars/mars-size-s.jpg" srcset="img/content/mars/mars-size-s@2x.jpg 2x" width="344" height="232" alt="Сюрреалистичное изображение человека.">
        </picture> */}
      </div>

      <div className="quest-card__content">
        <div className="quest-card__info-wrapper">
          <a className="quest-card__link" href="quest.html">Марс-2056</a>
        </div>
        {/* <div class="quest-card__info-wrapper"><a class="quest-card__link" href="quest.html">Маньяк</a><span class="quest-card__info">[сегодня,&nbsp;17:00. наб. реки Карповки&nbsp;5, лит&nbsp;П<br>м. Петроградская]</span> */}

        <ul className="tags quest-card__tags">
          <li className="tags__item">
            <svg width="11" height="14" aria-hidden="true">
              <use xlinkHref="#icon-person"></use>
            </svg>2&ndash;4&nbsp;чел
          </li>
          <li className="tags__item">
            <svg width="14" height="14" aria-hidden="true">
              <use xlinkHref="#icon-level"></use>
            </svg>Лёгкий
          </li>
        </ul>
        <button className="btn btn--accent btn--secondary quest-card__btn" type="button">Отменить</button>
      </div>
    </div>
  );
}

export default QuestCard;
