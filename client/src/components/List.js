import React from 'react'

export const List = ({links}) => {
    if (!links.length){
        return <p className="center">Трав пока нет</p>
    }
    return (
        <table>
            <thead>
            <tr>
                <th>№</th>
                <th>Название</th>
                <th>Место произростания</th>
                <th>Описание</th>
                <th>Химический состав</th>
                <th>Лекарственная часть</th>
            </tr>
            </thead>

            <tbody>
            {links.map((link, index) => {
                return(
                    <tr>
                        <td>{index + 1}</td>
                        <td>{link.name_grass}</td>
                        <td>{link.place}</td>
                        <td>{link.opisanie}</td>
                        <td>{link.chem}</td>
                        <td>{link.ispolzovanie}</td>

                    </tr>

                )
            })}
            </tbody>
        </table>
    )
}