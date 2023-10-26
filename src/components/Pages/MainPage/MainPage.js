import React, { useEffect, useState } from 'react'
import { DownOutlined } from '@ant-design/icons'
import { Dropdown, Space } from 'antd'
import Card from '../../Card/Card.js'
import { jikan } from '../../../api'
import './MainPage.css'

const items = [
  {key: 1, label: '2007'},
  {key: 2, label: (<a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">2008</a>)},
  {key: 3, label: (<a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">2009</a>)},
]

function MainPage() {
  const [data, setData] = useState([]);

  async function fetch() {
    try{
      const responce = await jikan.get('/anime');
      setData(responce.data.data);
    } catch(e) {
      console.log(e);
    }
  }

  useEffect(() => {
    fetch();
  }, [])

  return (
    <>
      <div className="filterCover">
        <Dropdown menu={{items,}} >
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              Hover me
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
        <Dropdown menu={{items,}} >
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              Hover me
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
      </div>
      <div className="main">
        { data.map((item) =>
          <Card
            img={item.images.jpg.image_url}
            title={item.title}
            genres={item.genres}
            mal_id={item.mal_id}
          />
        )}
      </div>
    </>
  );
}

export default MainPage;
