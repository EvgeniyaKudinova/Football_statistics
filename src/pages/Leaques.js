import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios'
//import FootballData from 'footballdata-api-v2';

/*Создаем переменные для API*/
/*ключ с сайта*/
//const API_key = '341fe060b3b2489c92e0a336600502c0'

//формируем get запрос
const API = `https://restcountries.eu/rest/v2/competitions`
console.log(API)


function Leaques(){
    //по умолчанию пустой массив
    const [leaques, setleaques] = useState([])
    //для загрузки
    const [loading, setloading] = useState(false)
    //для отображения текущей стриницы, по умолчанию 1 страница показываться
    const [currentPage, setcurrentPage] = useState(1)
    //кол-во элементов, которые будем хранить на странице - 10
    const [leaquesPerPage] = useState(10)


    //получаем элементы
    useEffect(() =>{
        /*Асинхронный(одновременный) запрос на получение данных*/
        const gettingLeaques = async () =>{
        /*fetch - метод, позволяющий полностью прочитать url адрес и получить данные*/
        const api_url = await fetch(API, {
            headers: {
                "x-auth-token": "341fe060b3b2489c92e0a336600502c0"
            }
        });
        
        if (api_url.ok) {
            /*переводим данные в json формат*/
            const data = await api_url.json();
            /*выводим все то, что получили с url адреса*/
            console.log("Данные, которые получены в формате json",data);

          }
          else{
            console.error("Возникла проблема с получением данных о лигах");
          }

        }
        gettingLeaques()
    }, [])

    return(
        <div>
            <h1>Это страница лиг</h1>
        </div>
    )
}

export {Leaques}