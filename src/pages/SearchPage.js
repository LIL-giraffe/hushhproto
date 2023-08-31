import React from 'react'
import './SearchPage.css'
import { useStateValue } from '../StateProvider'
import useGoogleSearch from '../useGoogleSearch'
import { Link } from 'react-router-dom'
import Search from './Search'
import SearchIcon from '@mui/icons-material/Search';
import DescriptionIcon from '@mui/icons-material/Description';
import ImageIcon from '@mui/icons-material/Image';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import RoomIcon from '@mui/icons-material/Room';
import MoreVertIcon from '@mui/icons-material/MoreVert';


function SearchPage() {
    const [{ term }, dispatch] = useStateValue()

    //live API call
    const { data } = useGoogleSearch(term)


    return (
        <div className='searchPage'>
            <div className="searchPage_header">
                <Link to="/">
                    <img className='searchPage_logo' src="asset/cmi_1a99c09f.jpg" alt="" />
                </Link>
                <div className="searchPage_headerBody">
                    <Search hideButtons />
                    <div className="searchPage_options">
                        <div className="searchPage_optionLeft">
                            <div className="searchPage_option">
                                <SearchIcon />
                                <Link to="/all">All</Link>
                            </div>
                            <div className="searchPage_option">
                                <DescriptionIcon />
                                <Link to="/all">News</Link>
                            </div>
                            <div className="searchPage_option">
                                <ImageIcon />
                                <Link to="/all">Images</Link>
                            </div>
                            <div className="searchPage_option">
                                <LocalOfferIcon />
                                <Link to="/all">Shopping</Link>
                            </div>
                            <div className="searchPage_option">
                                <RoomIcon />
                                <Link to="/all">Maps</Link>
                            </div>
                            <div className="searchPage_option">
                                <MoreVertIcon />
                                <Link to="/all">More</Link>
                            </div>
                        </div>

                        <div className="searchPage_optionRight">
                            <div className="searchPage_option">
                                <Link to="/settings">Settings</Link>
                            </div>
                            <div className="searchPage_option">
                                <Link to="/tools">Tools</Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            {term && (
                <div className="searchPage_results">
                <p className='searchPage_resultCount'>
                  About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime} seconds) for {term}
                </p>

                {
                    data?.items.map(item=>( 
                        <div className='searchPage_result'>
                          <a className='searchPage_resultLink' href={item.link}>
                           {
                              item.pagemap?.cse_image?.length>0 && item.pagemap?.cse_image[0]?.src && (
                                <img className='searchPage_resultImage' src={item.pagemap?.cse_image[0]?.src} alt='' />
                              )
                           }
                            {item.displayLink}
                          </a>
                          <a className='searchPage_resultTitle' href={item.link}>
                            <h2>{item.title}</h2>
                          </a>
                          <p className='search_resultSnippet'>{item.snippet}</p>
                        </div> 
                    ))
                }

                </div>
            )}


        </div>
    )
}

export default SearchPage