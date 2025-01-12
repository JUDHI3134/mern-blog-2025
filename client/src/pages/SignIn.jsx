import React from 'react'
import {Form,FormControl,FormDescription,FormField,FormItem,FormLabel,FormMessage,} from "@/components/ui/form"
import { Input } from '@/components/ui/input'
import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Link } from 'react-router-dom'
import { RouteSignUp } from '@/helpers/RouteName'

const SignIn = () => {

    const formSchema = z.object({
        email: z.string().email(),
        password: z.string().min(8,'password must be atleast 8 character long')
      })

      const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
          email: "",
          password: "",
        },
      })

      function onSubmit(values) {
        console.log(values)
      }

  return (
    <div className='flex items-center justify-center h-screen w-screen'>
      
      <Card className='w-[400px] p-5'>
        <h1 className='text-2xl font-bold text-center mb-5'>Login to your Account</h1>
      <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className='mb-3'>
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
        <div className='mb-3'>
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
        <div>
        <Button className='w-full' type="submit">Sign In</Button>
        <div className='mt-5 text-sm flex items-center justify-center gap-2'>
            <p>Don't have an account?</p>
            <Link className='text-blue-500 hover:underline' to={RouteSignUp}>Sign Up</Link>
        </div>
        </div>
      </form>
      </Form>
      </Card>

    </div>
  )
}

export default SignIn
