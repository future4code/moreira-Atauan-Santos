import React, { useEffect, useState } from 'react'
import { createCommentVote, changeCommentVote, deleteCommentVote } from '../components/APIRequests'
import Avatar from '@mui/material/Avatar'
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp'
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown'
import { COLORS } from '../constants/styling'
import { CommentMainContainer, CommentUserContainer, CommentBodyContainer, CommentVoteContainer } from './styles'

