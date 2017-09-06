/**
 * Created by Dylanwoo on 2017/9/6.
 */
import './style.css';
import React,{PropTypes} from 'react';
import marked from 'marked';

const propTypes = {
    item: PropTypes.object,
    onEdit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
};

function ItemShowLayer({item,onEdit,onDelete}) {
    //如果没有传入item，直接返回静态提示
    if(!item||!item.id){
        return(
            <div className="col-md-8 item-show-layer-component">
                <div className="no-select">请选择左侧列表里面的文章</div>
            </div>
        )
    }
    let content = marked(item.cotent);

    return(
        <div className="col-md-8 item-show-layer-component">
            <div className="control-area">
                <button className="btn btn-primary">编辑</button>
                <button className="btn btn-danger">删除</button>
            </div>
            <h2>{item.title}</h2>
            <div className="item-text">
                <div dangerouslySetInnerHTML={{_html:content}}></div>
            </div>
        </div>
    );
}
ItemShowLayer.propTypes = propTypes;
export default ItemShowLayer;
