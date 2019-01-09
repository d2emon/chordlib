import React, { Component } from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardSubtitle,
  CardBody,
} from 'reactstrap';
class Home extends Component {
  render() {
    return (
      <div className="App">
        <Card>
          <CardHeader>
            <CardTitle>Песенник</CardTitle>
            <CardSubtitle>Мой сборник аккордов</CardSubtitle>
          </CardHeader>
          <CardBody>
            <h5>Фирма Tycoon представляет:</h5>
            <div>
              <p>
                + Всю базу текстов, аккордов и табулатур сайта www.accords.ru, накопленную за несколько лет его существования
                в период до 07 июня 2004 года включительно!
              </p>
              <p>
                Теперь Вам не придётся каждый раз, когда возникнет желание сыграть любимую песню, вылезать в интернет и
                тратить время, трафик, деньги и нервы на поиск хорошего варианта аккордов, либо разгребать на жёстком диске
                завалы невнятных html'ок - всё есть здесь!
              </p>
              <p>
                Чего же вы ждёте? Вперёд и с песней! Желаем удачи!
              </p>
            </div>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default Home;
