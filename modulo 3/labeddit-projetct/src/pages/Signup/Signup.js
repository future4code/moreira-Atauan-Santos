import React from 'react'
import { useNavigate } from 'react-router-dom'
import { signUp } from '../../components/APIRequests'
import { SignupMainContainer, StyledTitle, StyledForm, InputsContainer, IndividualInputContainer, StyledInputs, SubmitButton, GoBackButton } from './styles'
import { useForm } from '../../hooks/useForm'
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail'
import PasswordIcon from '@mui/icons-material/Password'

