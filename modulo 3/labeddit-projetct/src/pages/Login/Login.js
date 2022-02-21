import React from 'react'
import { useNavigate } from 'react-router-dom'
import { LoginMainContainer, StyledTitle, StyledForm, InputsContainer, StyledInputs, SubmitButton, GoBackButton, IndividualInputContainer, StyledSignUpContainer } from './styles'
import { useForm } from '../../hooks/useForm'
import { login } from '../../components/APIRequests'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail'
import PasswordIcon from '@mui/icons-material/Password'

