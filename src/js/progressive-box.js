import React from 'react';
import TimeAgo from 'timeago-react';

export const ProgressiveBox = ({ picture, name, username, content, time}) =>
    <div className="box">
        <article className="media">
            <div className="media-left">
                <figure className="image is-64x64">
                    <img src={picture} alt="Image" />
                </figure>
            </div>
            <div className="media-content">
                <div className="content">
                    <p>
                        <strong>{name}</strong> <small>@{username}</small> <small><TimeAgo datetime={time} /></small>
                        <br />
                        {content}
                    </p>
                </div>
                <nav className="level">
                    <div className="level-left">
                        <a className="level-item">
                            <span className="icon is-small"><i className="fa fa-reply"></i></span>
                        </a>
                        <a className="level-item">
                            <span className="icon is-small"><i className="fa fa-retweet"></i></span>
                        </a>
                        <a className="level-item">
                            <span className="icon is-small"><i className="fa fa-heart"></i></span>
                        </a>
                    </div>
                </nav>
            </div>
        </article>
    </div>;

export default ProgressiveBox;