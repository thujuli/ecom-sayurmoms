"use client";

import { Checkout, CheckoutSchema } from "@/lib/types";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ArrowLeft, CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { cn, priceToIDR } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/lib/hooks";
import CartItemCard from "@/components/cart-item-card";
import { Textarea } from "@/components/ui/textarea";
import { format } from "date-fns";

type TCard = {
  name: string;
  children: React.ReactNode;
};

const Card: React.FC<TCard> = (props) => {
  const { name, children } = props;

  return (
    <div className="flex flex-col gap-1 rounded border-2 border-black p-2 md:p-4">
      <h2 className="mb-2 font-bold lg:text-lg">{name}</h2>
      {children}
    </div>
  );
};

const CheckoutPage: React.FC = () => {
  const { data: cart } = useAppSelector((state) => state.cart);
  const router = useRouter();
  const form = useForm<Checkout>({
    resolver: zodResolver(CheckoutSchema),
  });

  const totalAmount = cart.reduce((prev, cur) => {
    const price = cur.discount
      ? cur.price - (cur.price * cur.discount) / 100
      : cur.price;

    return prev + price * cur.qty;
  }, 0);

  const delivery = form.watch("delivery");

  const onSubmit: SubmitHandler<Checkout> = (data) => {
    console.log(data);
  };

  const renderCartItems = () => {
    return cart.map((product, idx) => (
      <CartItemCard
        key={idx}
        image={product.image}
        price={product.price}
        qty={product.qty}
        title={product.title}
        discount={product.discount}
        sku={product.sku}
      />
    ));
  };

  return (
    <section id="checkout" className="mx-auto w-full md:w-[400px] lg:w-[500px]">
      <div className="mb-2 p-2">
        <span className="flex items-center gap-1">
          <button type="button" onClick={() => router.back()}>
            <ArrowLeft className="h-5 w-5 lg:h-6 lg:w-6" />
          </button>
          <span className="text-xl font-extrabold lg:text-2xl">Checkout</span>
        </span>
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-4 px-1"
        >
          <Card name="Data Pembeli">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Nama" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="No. Telp" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </Card>

          <Card name="Produk">
            <div className="space-y-3">{renderCartItems()}</div>
          </Card>

          <Card name="Pilih Pengiriman">
            <FormField
              control={form.control}
              name="delivery"
              render={({ field }) => (
                <FormItem>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Pilih pengiriman yang tersedia" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Pick Up">Pick Up</SelectItem>
                      <SelectItem value="Paxel Sameday">
                        Paxel Sameday
                      </SelectItem>
                      <SelectItem value="Borzo Instant">
                        Borzo Instant
                      </SelectItem>
                      <SelectItem value="Grab Sameday">Grab Sameday</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            {delivery === "Pick Up" && (
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        placeholder="Tambahkan Alamat"
                        {...field}
                        required={form.getValues("delivery") === "Pick Up"}
                        className="resize-none"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
            <FormField
              control={form.control}
              name="note"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Catatan (Opsional)" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </Card>

          <Card name="Tanggal Pengiriman">
            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !field.value && "text-muted-foreground",
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>DD/MM/YYYY</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) => date < new Date()}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
          </Card>

          <Card name="Ringkasan Pesanan">
            <div className="mb-2 flex items-center justify-between border-b-2 border-dashed border-black">
              <span>
                Total Barang: <strong>{cart.length}</strong>
              </span>
              <span>Rp.{priceToIDR(totalAmount)}</span>
            </div>

            <FormField
              control={form.control}
              name="voucher"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Kode Voucher" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="my-2 flex items-center justify-between border-y-2 border-dashed border-black py-2 text-sm">
              <span>Sub Total:</span>
              <span>Rp.{priceToIDR(totalAmount)}</span>
            </div>

            <div className="flex items-center justify-between text-lg font-extrabold">
              <span>Total:</span>
              <span>Rp.{priceToIDR(totalAmount)}</span>
            </div>
          </Card>

          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </section>
  );
};

export default CheckoutPage;
