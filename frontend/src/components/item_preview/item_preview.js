import css from './item_preview.module.css';
import { useState, useEffect, useReducer, useContext } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import SizeSelector from './size_selector.js'
import { StateContext } from '../state_management/context.js'
import { useRef } from 'react';


export default function Preview(props) {

    const navigate = useNavigate()
    const location = useLocation()
    const [state, dispatch] = useContext(StateContext)

    const [image_class_1, set_image_class_1] = useState(css.image)
    const [image_class_2, set_image_class_2] = useState(css.display_none)
    const [image_class_3, set_image_class_3] = useState(css.display_none)
    const [add_basket, set_add_basket] = useState(css.add_to_basket)
    const [size_selection, set_size_selection] = useState()
    const [isSmallScreen, setIsSmallScreen] = useState(false)
    const [price, set_price] = useState()

    var [count_small, set_count_small] = useState(location.state.item.qty_small)
    var [count_medium, set_count_medium] = useState(location.state.item.qty_medium)
    var [count_large, set_count_large] = useState(location.state.item.qty_large)
    var [count_extra_large, set_count_extra_large] = useState(location.state.item.qty_extra_large)

    const [size_small, set_size_small] = useState(css.size_element)
    const [size_medium, set_size_medium] = useState(css.size_element)
    const [size_large, set_size_large] = useState(css.size_element)
    const [size_extra_large, set_size_extra_large] = useState(css.size_element)


    useEffect(() => {
      set_price(location.state.item.price * (1 - (location.state.item.sale / 100)))
      const item_data = getData('basket')
      stock_revise(item_data)
      stock_check()
    }, []);

    const saveData = (key, data) => {
      window.localStorage.setItem(key, JSON.stringify(data));
    };

    const getData = key => {
      return JSON.parse(window.localStorage.getItem(key));
    };

    const stock_revise = (items) => {

      if (items) {
        items.map((item) => {
          if (item.parent_id === location.state.item.id) {
            switch (item.size) {
              case 'S':
                count_small = count_small - 1
                break;
              case 'M':
                count_medium = count_medium - 1
                break;
              case 'L':
                count_large = count_large - 1
                break;
              case 'XL':
                count_extra_large = count_extra_large - 1
                break;
              default:
                break;
            }
          }
        });
      };
      set_count_small(count_small);
      set_count_medium(count_medium);
      set_count_large(count_large);
      set_count_extra_large(count_extra_large);
    };

    const tileClick = (img) => {
      switch (img) {
        case 1:
          set_image_class_1(css.image)
          set_image_class_2(css.display_none)
          set_image_class_3(css.display_none)
          break
        case 2:
          set_image_class_2(css.image)
          set_image_class_1(css.display_none)
          set_image_class_3(css.display_none)
          break
        case 3:
          set_image_class_3(css.image)
          set_image_class_2(css.display_none)
          set_image_class_1(css.display_none)
          break
        default:
          break
      }
    }

    const item_refine = (item, item_size, item_id, parent_id) => {
      const basket_item = {
        'parent_id': parent_id,
        'id': item_id,
        'title': item.title,
        'description': item.description,
        'category': item.category,
        'colour': item.colour,
        'price': price,
        'image1': item.image1,
        'image2': item.image2,
        'image3': item.image3,
        'size': item_size
      }
      return basket_item
    }

    const add_item = () => {
      var count = (add_basket.match(/item_preview/g) || []).length;
      if( count > 1 ){
        var items = getData('basket');
        var item 
        if( items == null ){
          items = []
          item = item_refine(location.state.item, size_selection, 0, location.state.item.id)
        }else {
          item = item_refine(location.state.item, size_selection, items.length, location.state.item.id)
        }
        items.push(item)
        saveData('basket', items);
        dispatch({ type: 'add_to_basket', payload: items })
        set_add_basket(css.add_to_basket)
        stock_decrement(size_selection)
        window.location.reload()            // ** Very Temporary Fix **
      }
    }

    const stock_check = () => {
      set_size_small(count_small <= 0 ? `${css.size_element} ${css.no_stock}` : css.size_element);
      set_size_medium(count_medium <= 0 ? `${css.size_element} ${css.no_stock}` : css.size_element);
      set_size_large(count_large <= 0 ? `${css.size_element} ${css.no_stock}` : css.size_element);
      set_size_extra_large(count_extra_large <= 0 ? `${css.size_element} ${css.no_stock}` : css.size_element);
    };

    const roundNumber = (value, decimals) => {
      const factor = Math.pow(10, decimals);
      return Math.round(value * factor) / factor;
    }

    function size_select(size) {
      stock_check()
      switch (size) {
        case 'S':
          set_size_small(`${css.size_element} ${css.size_select}`);
          break;
        case 'M':
          set_size_medium(`${css.size_element} ${css.size_select}`);
          break;
        case 'L':
          set_size_large(`${css.size_element} ${css.size_select}`);
          break;
        case 'XL':
          set_size_extra_large(`${css.size_element} ${css.size_select}`);
          break;
        default:
          break;
      }
      set_size_selection(size);
      set_add_basket(`${css.add_to_basket} ${css.add_to_basket_select}`);
    }

    const stock_decrement = (size) => {
      switch (size) {
        case 'S':
          set_count_small(count_small - 1);
          break;
        case 'M':
          set_count_medium(count_medium - 1);
          break;
        case 'L':
          set_count_large(count_large - 1);
          break;
        case 'XL':
          set_count_extra_large(count_extra_large - 1);
          break;
        default:
          break;
      }
    };

   return (

    <div className={css.preview_container}>
      <div className={css.preview_cont}>
        <div className={css.image_cont}>
          <div className={css.carousel}>
            <img className={image_class_1} src={location.state.item.image1} />
            <img className={image_class_2} src={location.state.item.image2} />
            <img className={image_class_3} src={location.state.item.image3} />
          </div>
          <div className={css.mini_image_container}>
            <div className={css.mini_image_cont}>
              <img className={css.mini_image} src={location.state.item.image1} onClick={()=> { tileClick(1) }} />
              <img className={css.mini_image} src={location.state.item.image2} onClick={()=> { tileClick(2) }} />
              <img className={css.mini_image} src={location.state.item.image3} onClick={()=> { tileClick(3) }} />
            </div>
          </div>
        </div>
        <div className={css.item_control_cont}>
          <div className={css.item_info_cont}>
            <div className={css.title}>{location.state.item.title}</div>
            <div className={css.description}>{location.state.item.description}</div>
            <div className={css.price}>£{roundNumber(price, 2)}</div>
            <SizeSelector size_select={size_select} size_small={size_small} size_medium={size_medium} size_large={size_large} size_extra_large={size_extra_large} />
          </div>
          <div className={css.checkout_cont}>
            <div className={add_basket} onClick={add_item} >Add to Basket</div>
            <div className={css.continue_shopping} onClick={()=> navigate('/store', 
                           {state: {catagory: location.state.item.category}})}>Continue Shopping</div>
          </div>
        </div>
      </div> 

      <div className={css.preview_mobile_cont}>
        <div className={css.preview_mobile_header}>
          <div className={css.title_mobile}>{location.state.item.title}</div>
          <div className={css.description_mobile}>{location.state.item.description}</div>
        </div>
        <div className={css.carousel_cont_mobile}>
          <div className={css.carousel_mobile}>
            <img className={image_class_1} src={location.state.item.image1} />
            <img className={image_class_2} src={location.state.item.image2} />
            <img className={image_class_3} src={location.state.item.image3} />
          </div>
        </div>
        <div className={css.mini_image_container_mobile}>
          <div className={css.mini_image_cont_mobile}>
            <img className={css.mini_image_mobile} src={location.state.item.image1} onClick={()=> { tileClick(1) }} />
            <img className={css.mini_image_mobile} src={location.state.item.image2} onClick={()=> { tileClick(2) }} />
            <img className={css.mini_image_mobile} src={location.state.item.image3} onClick={()=> { tileClick(3) }} />
          </div>
        </div>
        <div className={css.preview_mobile_footer}>
            <SizeSelector size_select={size_select} size_small={size_small} size_medium={size_medium} size_large={size_large} size_extra_large={size_extra_large} />
            <div className={css.price_mobile}>£{price}</div>
            <div className={add_basket} onClick={add_item} >Add to Basket</div>
            <div className={css.continue_shopping}>Continue Shopping</div>
        </div>
      </div> 
    </div>
  );
}


