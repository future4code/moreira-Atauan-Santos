import React, { useEffect, useState } from 'react'
import { FeedMainContainer, NotLoggedContainer, FeedSearchBarContainer, FeedPageControlContainer, StyledNewPostForm, StyledPostButton, FeedPostsContainer, EmphasizedText1, EmphasizedText2, NewPostFooter, StyledCharCount, StyledCharCountOver } from './styles'
import { getPosts, createPost, getPostComments } from '../../components/APIRequests'
import Post from '../../components/Post'
import { useForm } from '../../hooks/useForm'
import Pagination from '@mui/material/Pagination'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';

