import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useProtectedPage } from '../../hooks/AuthenticationControl'
import { getPosts, getPostComments, createComment, createPostVote, changePostVote, deletePostVote } from '../../components/APIRequests'
import { PostDetailMainContainer, PostDetailHeaderContainer, PostDetailNewCommentContainer, PostDetailBodyContainer, PostMainContainer, PostHeaderContainer, PostUserContainer, PostTitleContainer, PostBodyContainer, PostVoteContainer, PostSecondaryContainer } from './styles'
import { GoBackButton } from '../Login/styles'
import Avatar from '@mui/material/Avatar'
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import Comment from '../../components/Comment'
import { COLORS } from '../../constants/styling'
import { useForm } from '../../hooks/useForm'
import HourglassTopIcon from '@mui/icons-material/HourglassTop';

