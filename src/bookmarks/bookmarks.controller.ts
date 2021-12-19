import { BookmarksService } from './bookmarks.service';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Bookmark } from './bookmark.model';
import { CreateBookmarkDto } from './dto/create-bookmark.dto';

@Controller('bookmarks')
export class BookmarksController {
  constructor(private BookmarksService: BookmarksService) {}

  @Get()
  findAll(): Bookmark[] {
    return this.BookmarksService.findAll();
  }

  @Get('/:id')
  findById(@Param('id') id: string): Bookmark {
    return this.BookmarksService.findById(id);
  }

  @Post()
  createBookmark(@Body() createBookmarkDto: CreateBookmarkDto): Bookmark {
    return this.BookmarksService.createBookmarks(createBookmarkDto);
  }
  //Post all bady data
  // @Post()
  // createBookmark(@Body() body) {
  //     console.log(body);
  // }

  // @Post()
  // createBookmark(@Body('url') url, @Body('description') description): Bookmark {
  //   return  this.BookmarksService.createBookmarks(url, description)
  // }
}
