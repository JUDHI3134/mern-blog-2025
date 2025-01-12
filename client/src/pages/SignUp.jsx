import React from 'react'
import {Form,FormControl,FormDescription,FormField,FormItem,FormLabel,FormMessage,} from "@/components/ui/form"
import { Input } from '@/components/ui/input'
import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { data, Link } from 'react-router-dom'
import { RouteSignIn } from '@/helpers/RouteName'

const SignUp = () => {

    const formSchema = z.object({
        name: z.string().min(3,'name must be 3 character long'),
        email: z.string().email(),
        password: z.string().min(8,'password must be atleast 8 character long'),
        confirmPassword: z.string().refine(data => data.password === data.confirmPassword,'password & confirm password should be same')
      })

      const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        },
      })

      function onSubmit(values) {
        console.log(values)
      }

  return (
    <div className='flex items-center justify-center h-screen w-screen'>
      
      <Card className='w-[400px] p-5'>
        <h1 className='text-2xl font-bold text-center mb-5'>Create an Account</h1>
      <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className=''>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter your Name" {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
        </div>
        <div className=''>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter your email" {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
        </div>
        <div className=''>
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="Enter your Password" {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
        </div>
        <div className=''>
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <Input placeholder="Enter confirm Password" {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
        </div>
        <div>
        <Button className='w-full' type="submit">Sign Up</Button>
        <div className='mt-5 text-sm flex items-center justify-center gap-2'>
            <p>Already have an account?</p>
            <Link className='text-blue-500 hover:underline' to={RouteSignIn}>Sign In</Link>
        </div>
        </div>
      </form>
      </Form>
      </Card>

    </div>
  )
}



export default SignUp
