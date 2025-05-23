import { STUDENTS_URL } from '../constants';
import { apiSlice } from '../apiSlice';

export const studentsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getStudentProfile: builder.query({
      query: () => ({
        url: `${STUDENTS_URL}/profile`,
        credentials: 'include',
      }),
      providesTags: ['Students'],
      keepUnusedDataFor: 5,
    }),
    getStudents: builder.query({
      query: (page) => ({
        url: `${STUDENTS_URL}?pageNumber=${page}`,
        credentials: 'include',
      }),
      providesTags: ['Students'],
      keepUnusedDataFor: 5,
    }),
    getStudentResults: builder.query({
      query: () => ({
        url: `${STUDENTS_URL}/results`,
        credentials: 'include',
      }),
      providesTags: ['Students'],
      keepUnusedDataFor: 5,
    }),
    searchStudents: builder.query({
      query: ({ keyword, level, page }) => ({
        url: `${STUDENTS_URL}?keyword=${keyword}&level=${level}&pageNumber=${page}`,
        credentials: 'include',
      }),
      providesTags: ['Students'],
      keepUnusedDataFor: 5,
    }),
    getStudent: builder.query({
      query: (studentId) => ({
        url: `${STUDENTS_URL}/${studentId}`,
        credentials: 'include',
      }),
      providesTags: ['Students'],
      keepUnusedDataFor: 5,
    }),
    registerStudent: builder.mutation({
      query: (data) => ({
        url: `${STUDENTS_URL}`,
        method: 'POST',
        body: data,
        credentials: 'include',
      }),
    }),
    updateStudent: builder.mutation({
      query: (data) => ({
        url: `${STUDENTS_URL}/${data.studentId}`,
        method: 'PUT',
        body: data,
        credentials: 'include',
      }),
    }),
    deleteStudent: builder.mutation({
      query: (studentId) => ({
        url: `${STUDENTS_URL}/${studentId}`,
        method: 'DELETE',
        credentials: 'include',
      }),
      providesTags: ['Students'],
    }),
    graduateStudents: builder.mutation({
      query: () => ({
        url: `${STUDENTS_URL}/graduate`,
        method: 'PUT',
        credentials: 'include',
      }),
      providesTags: ['Students'],
    }),
    reserStudentsFee: builder.mutation({
      query: (data) => ({
        url: `${STUDENTS_URL}/fees`,
        method: 'POST',
        body: data,
        credentials: 'include',
      }),
      providesTags: ['Students'],
    }),

    forgetStudentPassword: builder.mutation({
      query: (data) => ({
        url: `${STUDENTS_URL}/forget-password`,
        method: 'POST',
        body: data,
      }),
    }),
    resetStudentPassword: builder.mutation({
      query: (data) => ({
        url: `${STUDENTS_URL}/reset-password?token=${data.token}`,
        method: 'PUT',
        body: data,
      }),
    }),
  }),
});

export const {
  useGetStudentProfileQuery,
  useGetStudentsQuery,
  useGetStudentQuery,
  useGetStudentResultsQuery,
  useSearchStudentsQuery,
  useRegisterStudentMutation,
  useUpdateStudentMutation,
  useDeleteStudentMutation,
  useGraduateStudentsMutation,
  useForgetStudentPasswordMutation,
  useResetStudentPasswordMutation,
  useStudentDataQuery,
  useReserStudentsFeeMutation,
} = studentsApiSlice;
