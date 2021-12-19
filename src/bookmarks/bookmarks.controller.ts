import { BookmarksService } from './bookmarks.service';
import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { Bookmark } from './bookmark.model';
import { CreateBookmarkDto } from './dto/create-bookmark.dto';
import { GetBookmarkDto } from './dto/get-bookmark.dto';

@Controller('bookmarks')
export class BookmarksController {
  constructor(private bookmarksService: BookmarksService) {}

  @Get()
  find(@Query() getBookmarkDto: GetBookmarkDto): Bookmark[] {
    if (Object.keys(getBookmarkDto).length) {
      return this.bookmarksService.find(getBookmarkDto);
    }
    return this.bookmarksService.findAll();
  }

  @Get('/:id')
  findById(@Param('id') id: string): Bookmark {
    return this.bookmarksService.findById(id);
  }

  @Post()
  createBookmark(@Body() createBookmarkDto: CreateBookmarkDto): Bookmark {
    return this.bookmarksService.createBookmarks(createBookmarkDto);
  }
  //Post all bady data
  // @Post()
  // createBookmark(@Body() body) {
  //     console.log(body);
  // }

  // @Post()
  // createBookmark(@Body('url') url, @Body('description') description): Bookmark {
  //   return  this.bookmarksService.createBookmarks(url, description)
  // }
}
