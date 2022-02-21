import React, {useState, useEffect } from 'react'
import { PostMainContainer, PostHeaderContainer, PostUserContainer, PostTitleContainer, PostBodyContainer, PostFooterContainer, PostVoteContainer, PostCommentContainer, PostCommentClickContainer } from './styles'
import Avatar from '@mui/material/Avatar';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { COLORS } from '../constants/styling';
import { createPostVote, changePostVote, deletePostVote } from './APIRequests';

